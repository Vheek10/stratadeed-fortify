/** @format */
"use client";

import { Target, Eye, Globe, Home, Lock, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden relative">
			{/* Suble background texture */}
			<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16 lg:mb-24">
					<motion.div 
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 dark:bg-blue-900/20 rounded-full mb-8 border border-blue-500/20">
						<Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
						<span className="text-xs font-black text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase">
							Our Core Purpose
						</span>
					</motion.div>

					<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter">
						Building the <span className="text-blue-600">Future</span> of Real Estate
					</h2>

					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
						We're not just tokenizing buildings; we're rebuilding the infrastructure of trust 
						and accessibility for the global property market.
					</p>
				</motion.div>

				{/* Mission & Vision Cards */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
					{/* Mission Card */}
					<motion.div 
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						whileHover={{ y: -10 }}
						transition={{ duration: 0.6 }}
						className="relative overflow-hidden rounded-[40px] group shadow-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-gray-900">
						{/* Background Image Area */}
						<div className="h-64 sm:h-80 relative">
							<Image
								src="/images/unsplash-f24b0cae1224.jpg"
								alt="Modern home interior"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-1000"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
						</div>

						{/* Content Overlay */}
						<div className="relative p-10 sm:p-12 -mt-20">
							<div className="w-20 h-20 rounded-[30px] bg-blue-600 shadow-[0_15px_30px_rgba(37,99,235,0.4)] flex items-center justify-center mb-10 transform -rotate-6 transition-transform group-hover:rotate-0 duration-500">
								<Target className="w-10 h-10 text-white" />
							</div>

							<h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
								Our Mission
							</h3>

							<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10">
								To rebuild trust in global real estate by merging legal rigor
								with modern blockchain technology, creating secure and
								accessible property ownership.
							</p>

							<div className="flex flex-wrap items-center gap-6">
								{["Trust", "Security", "Innovation"].map((tag) => (
									<div key={tag} className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
										<span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{tag}</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Vision Card */}
					<motion.div 
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						whileHover={{ y: -10 }}
						transition={{ duration: 0.6 }}
						className="relative overflow-hidden rounded-[40px] group shadow-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-gray-900">
						{/* Background Image Area */}
						<div className="h-64 sm:h-80 relative">
							<Image
								src="/images/unsplash-9991f1c4c750.jpg"
								alt="Global development"
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-1000"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
						</div>

						{/* Content Overlay */}
						<div className="relative p-10 sm:p-12 -mt-20">
							<div className="w-20 h-20 rounded-[30px] bg-cyan-600 shadow-[0_15px_30px_rgba(8,145,178,0.4)] flex items-center justify-center mb-10 transform rotate-6 transition-transform group-hover:rotate-0 duration-500">
								<Eye className="w-10 h-10 text-white" />
							</div>

							<h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
								Our Vision
							</h3>

							<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-10">
								A world where property ownership is liquid, transparent, and
								accessible to anyone with a mobile phone—democratizing real
								estate for the digital age.
							</p>

							<div className="flex flex-wrap items-center gap-6">
								{["Global", "Liquid", "Inclusive"].map((tag) => (
									<div key={tag} className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
										<span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{tag}</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Values Section */}
				<motion.div 
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="pt-16 border-t border-gray-200 dark:border-white/5">
					<div className="text-center mb-16">
						<h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
							Core Values
						</h3>
						<p className="text-lg text-gray-500 dark:text-gray-400 font-light">
							The principles that guide our every transaction
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: Shield,
								title: "Security First",
								description: "Bank-grade encryption and audited smart contract protection",
								color: "blue",
							},
							{
								icon: Lock,
								title: "Transparency",
								description: "Clear ownership records and full transaction history",
								color: "cyan",
							},
							{
								icon: Globe,
								title: "Global Access",
								description: "Borderless property investment opportunities for everyone",
								color: "emerald",
							},
							{
								icon: Home,
								title: "Real Value",
								description: "Tangible assets with verified legal ownership records",
								color: "violet",
							},
						].map((value) => (
							<motion.div
								key={value.title}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								className="text-center p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl hover:shadow-gray-200 dark:hover:shadow-black/20 transition-all duration-300">
								<div
									className={`inline-flex p-4 rounded-2xl bg-${value.color}-500/10 mb-6 border border-${value.color}-500/10`}>
									<value.icon className={`w-8 h-8 text-${value.color}-600 dark:text-${value.color}-400`} />
								</div>
								<h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
									{value.title}
								</h4>
								<p className="text-base text-gray-500 dark:text-gray-400 font-light leading-relaxed">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

