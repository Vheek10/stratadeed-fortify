/** @format */
"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Shield, Building } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
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
		<section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
			{/* Background Image with improved visibility */}
			<div className="absolute inset-0 z-0">
				{/* Enhanced Image Container */}
				<motion.div
					initial={{ scale: 1.1, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 2, ease: "easeOut" }}
					className="relative w-full h-full">
					<Image
						src="/hero.avif"
						alt="Modern architectural building with clean lines"
						fill
						priority
						className="object-cover object-center"
						sizes="100vw"
						quality={100}
						style={{
							objectPosition: "center 40%",
							filter: "brightness(0.75) contrast(1.1)",
						}}
					/>
				</motion.div>

				{/* Lighter gradient overlays to show more of the image */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/50" />
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-blue-900/10 to-transparent" />

				{/* Particle-like background effect */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{[...Array(5)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px]"
							animate={{
								x: [0, 50, 0],
								y: [0, 30, 0],
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 10 + i * 2,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							style={{
								left: `${10 + i * 20}%`,
								top: `${20 + (i % 3) * 20}%`,
							}}
						/>
					))}
				</div>
			</div>

			<div className="relative z-20 w-full">
				<div className="w-full px-4 sm:px-6 lg:px-8">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="max-w-6xl mx-auto">
						<div className="text-center">
							{/* Semi-transparent badge - Mobile responsive */}
							<motion.div
								variants={itemVariants}
								className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 lg:px-5 lg:py-2.5 bg-blue-500/10 backdrop-blur-md rounded-full mb-6 sm:mb-8 lg:mb-10 border border-blue-400/20">
								<Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 animate-pulse" />
								<span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-blue-100 tracking-wide whitespace-nowrap uppercase">
									Introducing Etherlink L2 Scaling
								</span>
								<Shield className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
							</motion.div>

							{/* Main Heading with responsive text sizes */}
							<div className="relative mb-6 sm:mb-8 lg:mb-10">
								<motion.div variants={itemVariants} className="relative inline-block">
									<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
										<span className="block">Tokenizing Global</span>
										<span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent mt-1 sm:mt-2">
											Real Estate Assets
										</span>
									</h1>
								</motion.div>

								{/* Subtitle with responsive text */}
								<motion.div variants={itemVariants} className="mt-6 sm:mt-8 max-w-2xl mx-auto px-2">
									<p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
										Verified digital deeds. Borderless ownership.{" "}
										<span className="font-semibold text-white">Unprecedented liquidity.</span>
										<br className="hidden sm:block" />
										Now powered by <span className="text-blue-400 font-medium">Etherlink</span> for sub-second finality.
									</p>
								</motion.div>

								{/* Decorative line */}
								<motion.div 
									variants={itemVariants}
									className="mt-8 flex justify-center"
								>
									<div className="w-24 sm:w-28 lg:w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
								</motion.div>
							</div>

							{/* Value Proposition - Responsive grid */}
							<motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-14 px-2">
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
									{[
										{
											icon: Shield,
											label: "Bank-Grade Compliance",
											color: "blue",
											desc: "KYC/AML Integrated"
										},
										{
											icon: Globe,
											label: "Global Market Access",
											color: "cyan",
											desc: "24/7 Fractional Trading"
										},
										{
											icon: Building,
											label: "Verified Properties",
											color: "emerald",
											desc: "On-chain Audit Trail"
										},
									].map((item, index) => (
										<motion.div
											key={index}
											whileHover={{ y: -5, scale: 1.02 }}
											className="flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
											<div
												className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center border border-${item.color}-400/20 mb-3`}>
												<item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
											</div>
											<span className="text-white text-sm sm:text-base font-bold mb-1">
												{item.label}
											</span>
											<span className="text-gray-400 text-xs text-center font-medium">
												{item.desc}
											</span>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* CTA Buttons - Stack on mobile */}
							<motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-16 sm:mb-20 px-4 w-full max-w-md sm:max-w-none mx-auto">
								<Link
									href="/dashboard"
									className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] w-full sm:w-auto text-center shadow-lg">
									<div className="relative flex items-center justify-center gap-2">
										<span>Explore Marketplace</span>
										<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
									</div>
								</Link>

								<Link
									href="/mint"
									className="group relative px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/20 w-full sm:w-auto text-center">
									<div className="relative flex items-center justify-center gap-2">
										<Building className="w-5 h-5" />
										<span>Tokenize Property</span>
									</div>
								</Link>
							</motion.div>

							{/* Stats section */}
							<motion.div variants={itemVariants} className="max-w-3xl mx-auto px-4">
								<div className="grid grid-cols-3 gap-4 sm:gap-8 py-8 border-y border-white/10 backdrop-blur-sm bg-black/10 rounded-3xl">
									{[
										{ value: "25K+", label: "Properties Listed" },
										{ value: "45+", label: "Global Markets" },
										{ value: "$2.5B+", label: "Trading Volume" },
									].map((item, index) => (
										<div key={index} className="text-center">
											<div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">
												{item.value}
											</div>
											<div className="text-[10px] sm:text-xs md:text-sm text-blue-400 font-bold uppercase tracking-widest">
												{item.label}
											</div>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<div className="flex flex-col items-center">
					<div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
						<motion.div 
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
							className="w-1.5 h-1.5 bg-blue-500 rounded-full" 
						/>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

