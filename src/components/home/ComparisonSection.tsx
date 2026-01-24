/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight, Shield, Zap, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const comparisons = [
	{
		title: "Traditional",
		subtitle: "The Old-School Way",
		features: [
			{ text: "Slow 60-day settlements", good: false },
			{ text: "Manual paperwork stacks", good: false },
			{ text: "Local geographical limits", good: false },
			{ text: "High brokerage fees", good: false },
		],
		image: "/images/unsplash-f200968a6e72.jpg",
		color: "red",
		accent: "bg-red-500",
		textColor: "text-red-400",
	},
	{
		title: "Speculative",
		subtitle: "High Risk, No Proof",
		features: [
			{ text: "Zero property verification", good: false },
			{ text: "High volatility risk", good: false },
			{ text: "Unregulated platforms", good: false },
			{ text: "Lack of transparency", good: false },
		],
		image: "/images/unsplash-e363dbe005cb.jpg",
		color: "orange",
		accent: "bg-orange-500",
		textColor: "text-orange-400",
	},
	{
		title: "StrataDeed",
		subtitle: "Future of RealFi",
		features: [
			{ text: "Automated legal verification", good: true },
			{ text: "Etherlink-backed security", good: true },
			{ text: "Global fractional trading", good: true },
			{ text: "Instant liquidity 24/7", good: true },
		],
		image: "/images/unsplash-ce09059eeffa.jpg",
		color: "blue",
		accent: "bg-blue-600",
		textColor: "text-blue-400",
	},
];

export default function ComparisonSection() {
	const [active, setActive] = useState(2);

	return (
		<section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 relative overflow-hidden">
			{/* Decorative background blast */}
			<div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-[120px] rounded-full transition-colors duration-1000 ${
				active === 0 ? "bg-red-500" : active === 1 ? "bg-orange-500" : "bg-blue-500"
			}`} />

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16 sm:mb-24">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
						The Evolution of <span className="text-blue-600">Ownership</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
						Compare how StrataDeed outperforms traditional and speculative investment models 
						on the Etherlink L2 network.
					</p>
				</motion.div>

				{/* Navigation Tabs */}
				<div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-16 sm:mb-20">
					{comparisons.map((item, index) => {
						const isActive = active === index;
						return (
							<button
								key={index}
								onClick={() => setActive(index)}
								className={`px-8 py-4 rounded-2xl font-black text-lg transition-all duration-500 flex items-center gap-3 ${
									isActive
										? `${item.accent} text-white shadow-2xl shadow-blue-500/20 scale-105`
										: "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
								}`}>
								<span className="opacity-50 text-base">0{index + 1}</span>
								{item.title}
							</button>
						);
					})}
				</div>

				{/* Display Card */}
				<motion.div 
					layout
					className="bg-gray-50 dark:bg-white/5 backdrop-blur-3xl rounded-[40px] p-8 sm:p-12 lg:p-16 border border-gray-200 dark:border-white/10 shadow-2xl">
					<div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
						{/* Image Area */}
						<div className="lg:col-span-5 w-full">
							<div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
								<AnimatePresence mode="wait">
									<motion.div
										key={active}
										initial={{ opacity: 0, scale: 1.1, rotate: -2 }}
										animate={{ opacity: 1, scale: 1, rotate: 0 }}
										exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
										transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
										className="absolute inset-0">
										<Image
											src={comparisons[active].image}
											alt={comparisons[active].title}
											fill
											className="object-cover"
										/>
										<div className={`absolute inset-0 bg-gradient-to-tr from-gray-900 via-transparent to-transparent opacity-60`} />
									</motion.div>
								</AnimatePresence>
								
								{/* Floating Badge */}
								<motion.div 
									key={`badge-${active}`}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									className="absolute top-8 right-8 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-sm">
									{comparisons[active].subtitle}
								</motion.div>
							</div>
						</div>

						{/* Content Area */}
						<div className="lg:col-span-7 w-full">
							<AnimatePresence mode="wait">
								<motion.div
									key={active}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.4 }}
									className="space-y-10">
									<div>
										<h3 className={`text-5xl sm:text-6xl font-black mb-4 tracking-tighter ${comparisons[active].textColor}`}>
											{comparisons[active].title}
										</h3>
										<div className="h-1.5 w-24 bg-current opacity-20 rounded-full" />
									</div>

									<div className="grid sm:grid-cols-1 gap-6">
										{comparisons[active].features.map((feature, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: i * 0.1 }}
												className="flex items-center gap-5 group">
												<div
													className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
														feature.good 
															? "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white" 
															: "bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white"
													}`}>
													{feature.good ? (
														<CheckCircle className="w-6 h-6" />
													) : (
														<XCircle className="w-6 h-6" />
													)}
												</div>
												<span className="text-xl sm:text-2xl font-bold dark:text-gray-200 text-gray-700">
													{feature.text}
												</span>
											</motion.div>
										))}
									</div>

									{active === 2 && (
										<motion.div 
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.5 }}
											className="pt-6">
											<Link href="/dashboard" className="inline-flex items-center gap-4 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-2xl shadow-xl hover:shadow-blue-500/40 transition-all duration-500 group">
												<span>Get Started</span>
												<ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
											</Link>
										</motion.div>
									)}
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

