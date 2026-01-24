/** @format */
"use client";

import {
	ArrowRight,
	Shield,
	CheckCircle,
	Zap,
	Globe,
	Building2,
	Check,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FinalCTASection() {
	const benefits = [
		{ icon: Shield, text: "Bank-grade security", color: "blue" },
		{ icon: CheckCircle, text: "Verified ownership", color: "emerald" },
		{ icon: Zap, text: "Instant transactions", color: "cyan" },
		{ icon: Globe, text: "Global accessibility", color: "blue" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<section className="relative py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
			{/* Background Layers */}
			<div className="absolute inset-0 z-0">
				<motion.div
					initial={{ scale: 1.2, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className="absolute inset-0">
					<Image
						src="/images/unsplash-c627a92ad1ab.jpg"
						alt="Modern city skyline"
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
				</motion.div>

				{/* Complex Overlays for Depth */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950/90 to-black/90" />
				<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
				<div className="absolute inset-1/4 bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center">
					
					{/* Badge */}
					<motion.div variants={itemVariants} className="flex justify-center mb-10">
						<div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
							<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
							<span className="text-xs font-black text-white tracking-[0.3em] uppercase">
								StrataDeed Ecosystem
							</span>
						</div>
					</motion.div>

					<motion.h2
						variants={itemVariants}
						className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
						Modern <span className="text-blue-500">Property</span>
						<br />
						Infrastructure
					</motion.h2>

					<motion.p
						variants={itemVariants}
						className="text-xl lg:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
						No hidden processes. No manual errors. No silent title issues. Just
						secure, transparent, and accessible real estate ownership built on 
						<span className="text-blue-400 font-bold ml-2">Etherlink L2</span>.
					</motion.p>

					{/* Benefits Grid */}
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-24">
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover={{ y: -8, scale: 1.02 }}
								className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
								<div className={`w-16 h-16 rounded-2xl bg-${benefit.color}-500/10 flex items-center justify-center mb-6 mx-auto border border-white/5 group-hover:bg-${benefit.color}-500/20 transition-colors`}>
									<benefit.icon className="w-8 h-8 text-white" />
								</div>
								<span className="text-lg font-bold text-white block text-center tracking-tight leading-snug">
									{benefit.text}
								</span>
							</motion.div>
						))}
					</motion.div>

					{/* Action Area */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
						<Link
							href="/dashboard"
							className="group relative px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black text-xl rounded-[24px] shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-blue-500/50 transition-all duration-500 overflow-hidden text-center min-w-[240px]">
							<span className="relative z-10 flex items-center justify-center gap-3">
								Start Investing <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
							</span>
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
						</Link>

						<Link
							href="/marketplace"
							className="group relative px-12 py-6 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-black text-xl rounded-[24px] hover:bg-white/5 transition-all duration-500 text-center min-w-[240px]">
							<span>Browse Properties</span>
						</Link>
					</motion.div>

					{/* Trust Bar */}
					<motion.div
						variants={itemVariants}
						className="pt-16 border-t border-white/5">
						<div className="flex flex-wrap justify-center gap-12 sm:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
							{[
								{ icon: Building2, value: "25K+", label: "Verified Deeds" },
								{ icon: Globe, value: "45+", label: "Global Regions" },
								{ icon: Zap, value: "<1s", label: "Finality" },
								{ icon: CheckCircle, value: "99.9%", label: "Uptime" },
							].map((stat, index) => (
								<div key={index} className="text-center group">
									<stat.icon className="w-10 h-10 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
									<div className="text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</div>
									<div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{stat.label}</div>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

