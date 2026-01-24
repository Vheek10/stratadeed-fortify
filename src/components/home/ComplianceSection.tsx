/** @format */
"use client";

import {
  FileCheck,
  Shield,
  Globe,
  CheckCircle,
  Lock,
  Users,
  ArrowRight,
  Zap,
  Database,
  Building,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const REAL_ESTATE_IMAGES = [
  {
    url: "/images/unsplash-ce09059eeffa.jpg",
    alt: "Modern transparent building",
    category: "Transparency",
  },
  {
    url: "/images/unsplash-cc1a3fa10c00.jpg",
    alt: "Secure commercial building",
    category: "Security",
  },
  {
    url: "/images/unsplash-fcd25c85cd64.jpg",
    alt: "Blockchain technology",
    category: "Technology",
  },
  {
    url: "/images/unsplash-f200968a6e72.jpg",
    alt: "Urban development",
    category: "Regulation",
  },
];

const complianceFeatures = [
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Automated checks against global registries ensuring 100% legal compliance.",
    metric: "100% Verified",
    color: "blue",
    imageIndex: 0,
  },
  {
    icon: Shield,
    title: "Smart Contract Security",
    description: "Escrow-protected multi-signature transactions on the Etherlink L2 network.",
    metric: "Zero Disputes",
    color: "emerald",
    imageIndex: 1,
  },
  {
    icon: Lock,
    title: "Zero-Knowledge privacy",
    description: "Advanced ZK-proofs that prove compliance without revealing sensitive PII data.",
    metric: "Full Privacy",
    color: "purple",
    imageIndex: 2,
  },
  {
    icon: Database,
    title: "On-chain Registry",
    description: "Permanent, tamper-proof title records stored immutably on the Tezos-backed L2.",
    metric: "24/7 Audit",
    color: "indigo",
    imageIndex: 2,
  },
  {
    icon: Globe,
    title: "Global Compliance",
    description: "Universal adherence to international KYC/AML and real estate regulations.",
    metric: "45+ Regions",
    color: "cyan",
    imageIndex: 3,
  },
];

export default function ComplianceSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const currentImage = REAL_ESTATE_IMAGES[complianceFeatures[activeFeature].imageIndex];

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 dark:bg-blue-900/20 rounded-full mb-8 border border-blue-500/20">
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-black text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
              Institutional Grade
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
            Engineered for <span className="text-blue-600">Compliance</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Built from the ground up to meet global regulatory requirements, 
            ensuring every fractionalized asset is legally binding and secure.
          </p>
        </motion.div>

        {/* Feature Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16">
          {complianceFeatures.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActiveFeature(index)}
              className={`flex flex-col items-center gap-4 p-6 rounded-[32px] transition-all duration-500 border ${
                activeFeature === index
                  ? "bg-white dark:bg-white/5 border-blue-500/30 shadow-2xl scale-105"
                  : "bg-gray-50 dark:bg-white/5 border-transparent text-gray-400 opacity-60 hover:opacity-100"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                activeFeature === index ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 dark:bg-white/10"
              }`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <div className="text-center">
                <div className={`text-base font-black ${activeFeature === index ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                  {feature.title.split(" ")[0]}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-1">
                  {feature.metric}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Feature Display */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          {/* Image Side */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0">
                  <Image
                    src={currentImage.url}
                    alt={currentImage.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div 
                  key={`badge-${activeFeature}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl inline-block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-lg font-black">{complianceFeatures[activeFeature].metric}</div>
                      <div className="text-white/60 text-xs font-bold uppercase tracking-wider">Automated Verification</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-10">
                <div>
                  <h3 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                    {complianceFeatures[activeFeature].title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {complianceFeatures[activeFeature].description}
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    "Instant AML filtering & verification",
                    "Smart contract legal automation",
                    "Audit-ready immutable records"
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-lg font-bold text-gray-700 dark:text-gray-200">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-4 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-lg rounded-2xl hover:scale-105 transition-transform duration-300">
                    Learn Protocol Docs <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Industry Metrics Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, label: "Transaction speed", value: "< 1s", color: "blue", progress: 98 },
            { icon: CheckCircle, label: "Compliance Rate", value: "100%", color: "emerald", progress: 100 },
            { icon: Users, label: "Verified Investors", value: "85K+", color: "cyan", progress: 85 },
            { icon: Lock, label: "Security Uptime", value: "99.9%", color: "purple", progress: 99 },
          ].map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 dark:bg-white/5 rounded-[40px] border border-gray-100 dark:border-white/5 relative group h-full">
              <div className={`w-14 h-14 rounded-2xl bg-${metric.color}-600/10 flex items-center justify-center mb-8 border border-${metric.color}-500/20`}>
                <metric.icon className={`w-7 h-7 text-${metric.color}-600 dark:text-${metric.color}-400`} />
              </div>
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-blue-500 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-8">
                {metric.label}
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.progress}%` }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className={`h-full bg-${metric.color}-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 rounded-[60px] bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-24 h-24 rounded-[40px] bg-white/20 backdrop-blur-xl flex items-center justify-center mb-10 border border-white/30 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Building className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-10 tracking-tight leading-[0.9]">
              The Gold Standard for Tokenized Real Estate
            </h3>
            <p className="text-xl lg:text-2xl text-white/80 font-light mb-12">
              We aren't just bypassing bureaucracy; we're upgrading the entire value chain 
              with cryptographic proof and Etherlink security.
            </p>
            <button className="group flex items-center gap-6 px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
              Review Compliance Framework <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
