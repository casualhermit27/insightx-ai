'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricing = {
    starter: {
      monthly: 29,
      annual: 290
    },
    pro: {
      monthly: 99,
      annual: 990
    },
    enterprise: {
      monthly: 'Custom',
      annual: 'Custom'
    }
  }

  return (
    <div className="min-h-screen text-slate-900" style={{ backgroundColor: '#F8F6F4' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="w-full px-1">
          <div className="flex justify-between items-center h-24">
            {/* Left - Brand Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 max-w-2xl"
            >
        <Image
                src="/logo.png"
                alt="Insightix AI Logo"
                width={1200}
                height={400}
                className="h-50 w-auto"
              />
            </motion.div>
            
            {/* Center - Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
            >
              <a href="#features" className="text-lg text-slate-600 hover:text-slate-900 transition-colors duration-300 font-sans font-medium hover:underline underline-offset-4">Features</a>
              <a href="#pricing" className="text-lg text-slate-600 hover:text-slate-900 transition-colors duration-300 font-sans font-medium hover:underline underline-offset-4">Pricing</a>
              <a href="#faq" className="text-lg text-slate-600 hover:text-slate-900 transition-colors duration-300 font-sans font-medium hover:underline underline-offset-4">FAQs</a>
            </motion.div>

            {/* Right - Contact Pill Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 max-w-lg flex justify-end pr-8"
            >
              <Button className="border-2 border-slate-900 bg-transparent hover:bg-slate-900 text-slate-900 hover:text-white rounded-full px-8 py-3 text-lg font-sans font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32">
        {/* Header and Description Row - Positioned above image */}
        <div className="relative mb-12">
          <div className="flex justify-between items-start gap-8">
            {/* Left - Main Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[0.9] font-display tracking-tight">
                Unlock the Power of Your Data<br />
                with AI-Driven Insights<br />
                <span className="text-slate-600">That Transform Your Business.</span>
              </h1>
            </motion.div>

            {/* Right - Description and CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 max-w-lg flex flex-col items-end space-y-6 pr-8 pt-35"
            >
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans text-right">
                Make smarter, faster decisions<br />
                powered by AI-driven analytics<br />
                and visualization tailored for your.
              </p>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-slate-300 hover:bg-slate-50 hover:border-slate-400 px-8 py-3 text-base font-medium font-sans inline-flex items-center gap-2 transition-all duration-200"
                >
                  EXPLORE COLLECTION
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-[65vh] bg-black rounded-2xl overflow-hidden relative group cursor-pointer"
        >
          {/* Video Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
          
          {/* Play Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300"
            >
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-0 h-0 border-l-[16px] border-l-slate-900 border-y-[12px] border-y-transparent ml-1"
              ></motion.div>
            </motion.div>
          </motion.div>
          
          
          {/* Corner Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 right-6 w-8 h-8 border-2 border-white/20 rounded-full"
          ></motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-6 w-3 h-3 bg-white/30 rounded-full"
          ></motion.div>
        </motion.div>
      </section>

      {/* Two Column Section - Text Left, Cards Right */}
      <section className="py-32 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight font-display tracking-tight mb-6 text-left">
              Powerful features designed<br />
              for modern businesses<br />
              and enterprises
            </h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans text-left">
              Harness innovative AI analytics to simplify complex data, empower your team, and drive impactful business outcomes with clarity and confidence.
            </p>
          </motion.div>

          {/* Right Side - 4 Square Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Card 1 - Chart (Material Design style) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square border border-slate-300 hover:border-slate-400 transition-colors duration-200 flex items-center justify-center p-4"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-6h2v16h-2V5z" fill="#3B82F6"/>
              </svg>
            </motion.div>

            {/* Card 2 - Brain/AI (Feather Icons style) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square border border-slate-300 hover:border-slate-400 transition-colors duration-200 flex items-center justify-center p-4"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-6.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" fill="#10B981"/>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-6.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" fill="#8B5CF6"/>
              </svg>
            </motion.div>

            {/* Card 3 - Database (Heroicons style) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square border border-slate-300 hover:border-slate-400 transition-colors duration-200 flex items-center justify-center p-4"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="5" rx="9" ry="3" fill="#F59E0B"/>
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#F59E0B" strokeWidth="2" fill="none"/>
              </svg>
            </motion.div>

            {/* Card 4 - Analytics (Tabler Icons style) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="aspect-square border border-slate-300 hover:border-slate-400 transition-colors duration-200 flex items-center justify-center p-4"
            >
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" fill="#EF4444" opacity="0.1"/>
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#EF4444" strokeWidth="2" fill="none"/>
                <circle cx="8" cy="8" r="2" fill="#EF4444"/>
                <circle cx="16" cy="8" r="2" fill="#3B82F6"/>
                <circle cx="8" cy="16" r="2" fill="#10B981"/>
                <circle cx="16" cy="16" r="2" fill="#F59E0B"/>
                <path d="M8 8l8 8M16 8l-8 8" stroke="#64748B" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features List Section */}
      <section id="features" className="py-32 px-8 md:px-16 lg:px-24 xl:px-32 flex justify-center items-center">
        <div className="max-w-5xl w-full text-center">
          <div className="space-y-16">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-slate-900 font-elegant tracking-tight leading-tight group-hover:text-slate-700 transition-all duration-300 group-hover:scale-105">
                Comprehensive Data Analytics
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-lg text-slate-600 font-sans font-light">Unlock deep insights across all your data sources with powerful AI algorithms</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-slate-900 font-elegant tracking-tight leading-tight group-hover:text-slate-700 transition-all duration-300 group-hover:scale-105">
                Advanced Visualization Tools
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-lg text-slate-600 font-sans font-light">Turn complex data into clear, interactive visuals that simplify decision-making and empower your team.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-slate-900 font-elegant tracking-tight leading-tight group-hover:text-slate-700 transition-all duration-300 group-hover:scale-105">
                Customizable Business Intelligence
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-lg text-slate-600 font-sans font-light">Tailor analytics dashboards and reports to fit your unique business needs and drive strategy with confidence.</p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic text-slate-900 font-elegant tracking-tight leading-tight group-hover:text-slate-700 transition-all duration-300 group-hover:scale-105">
                Expert Consultation & Support
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-lg text-slate-600 font-sans font-light">Leverage our team’s expertise to implement, optimize, and scale AI analytics solutions seamlessly within your organization.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-elegant tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-slate-600 font-sans max-w-2xl mx-auto mb-8">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg font-sans transition-colors duration-200 ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg font-sans transition-colors duration-200 ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-sans font-medium"
                >
                  Save 20%
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors duration-200 flex flex-col"
            >
              <div className="text-center flex-grow">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-elegant mb-4">Starter</h3>
                <div className="mb-6">
                  <motion.span 
                    key={isAnnual ? 'annual-starter' : 'monthly-starter'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-slate-900"
                  >
                    ${isAnnual ? pricing.starter.annual : pricing.starter.monthly}
                  </motion.span>
                  <span className="text-slate-600 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <p className="text-slate-600 mb-8 font-sans">Perfect for small teams getting started with AI</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    10,000 API calls
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Basic AI models
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Email support
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans mt-auto">
                Get Started
              </Button>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-slate-900 rounded-2xl p-8 relative flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-sans">Most Popular</span>
              </div>
              <div className="text-center flex-grow">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-elegant mb-4">Pro</h3>
                <div className="mb-6">
                  <motion.span 
                    key={isAnnual ? 'annual-pro' : 'monthly-pro'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-slate-900"
                  >
                    ${isAnnual ? pricing.pro.annual : pricing.pro.monthly}
                  </motion.span>
                  <span className="text-slate-600 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <p className="text-slate-600 mb-8 font-sans">Ideal for growing businesses with higher demands</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    100,000 API calls
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    Advanced AI models
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    Priority support
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-900 rounded-full mr-3"></span>
                    Custom integrations
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans mt-auto">
                Get Started
              </Button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors duration-200 flex flex-col"
            >
              <div className="text-center flex-grow">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-elegant mb-4">Enterprise</h3>
                <div className="mb-6">
                  <motion.span 
                    key={isAnnual ? 'annual-enterprise' : 'monthly-enterprise'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-slate-900"
                  >
                    {pricing.enterprise.monthly}
                  </motion.span>
                </div>
                <p className="text-slate-600 mb-8 font-sans">Tailored solutions for large organizations</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Unlimited API calls
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    All AI models
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center text-slate-700 font-sans">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    Custom deployment
                  </li>
                </ul>
              </div>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans mt-auto">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 font-elegant tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-slate-600 font-sans">
              Everything you need to know about our AI platform
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {[
              {
                question: "What types of data can Insightix AI analyze?",
                answer: "We analyze a wide range of data types including structured, unstructured, real-time streaming data, and big data from various sources such as databases, cloud platforms, IoT devices, and enterprise systems."
              },
              {
                question: "How does AI improve traditional data analytics?",
                answer: "AI automates complex data processing, uncovers hidden patterns, predicts trends, and provides actionable insights faster and with higher accuracy than traditional manual analytics methods."
              },
              {
                question: "Can Insightix AI's solutions be customized to specific industries?",
                answer: "Yes, our analytics and visualization platforms are tailored to the unique requirements of industries such as finance, healthcare, retail, manufacturing, and more, ensuring relevant insights and compliance."
              },
              {
                question: "How secure is my data with Insightix AI?",
                answer: "We implement state-of-the-art security protocols including data encryption, secure access controls, and compliance with regulations like GDPR and HIPAA to protect your data privacy and integrity."
              },
              {
                question: "What kind of support and consultation do you provide?",
                answer: "Our expert team offers end-to-end support including initial consultation, implementation guidance, training, and continuous optimization to help you get the most value from your AI analytics solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-slate-200 pb-6"
              >
                <h3 className="text-xl font-bold text-slate-900 font-elegant mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 font-sans leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
                        <Image
                src="/logo.png"
                alt="Insightix AI"
                width={1200}
                height={400}
                className="h-50 w-auto -mt-20"
              />
              <p className="text-slate-600 font-sans mb-6 max-w-md">
                Empowering businesses with powerful AI models and APIs. Simple, reliable, and scalable AI solutions for the modern world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors font-sans">Twitter</a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors font-sans">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors font-sans">GitHub</a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-slate-900 font-sans mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Features</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Pricing</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">API Docs</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Status</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-slate-900 font-sans mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">About</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Blog</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Careers</a></li>
                <li><a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-sans">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}