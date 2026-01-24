/** @format */
"use client";

import {
	FileCheck,
	Shield,
	Database,
	ArrowRight,
	CheckCircle,
	Zap,
	Globe,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getRandomImage } from "@/utils/realEstateImages";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
	{
		number: "01",
		icon: FileCheck,
		title: "Digitize Property",
		description:
			"Transform real estate into secure digital tokens with automated verification and off-chain compliance checks.",
		color: "blue",
		imageCategory: "modern-buildings",
		stats: ["<48h Verification", "99.8% Success"],
	},
	{
		number: "02",
		icon: Shield,
		title: "Secure Investment",
		description:
			"Fractional ownership through blockchain-powered smart contracts, ensuring immutable proof of ownership.",
		color: "emerald",
		imageCategory: "blockchain-tech",
		stats: ["Global 24/7 Access", "0 Disputes"],
	},
	{
		number: "03",
		icon: Database,
		title: "Track & Manage",
		description: "Real-time transparency with immutable blockchain records and automated yield distribution.",
		color: "cyan",
		imageCategory: "cityscapes",
		stats: ["<1s Finality", "Bank-grade Security"],
	},
];

export default function HowItWorksSection() {
	const [activeStep, setActiveStep] = useState(0);
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		const loadedImages = steps.map(
			(step) => getRandomImage(step.imageCategory as any).url,
		);
		setImages(loadedImages);
	}, []);

	const currentStep = steps[activeStep];

	const handleStepChange = (index: number) => {
		setActiveStep(index);
	};

	if (!images.length) {
		return (
			<section className="py-20 px-4 sm:px-6 bg-gray-950">
				<div className="max-w-6xl mx-auto">
					<div className="animate-pulse space-y-8">
						<div className="h-12 bg-gray-900 rounded-lg w-1/3 mx-auto"></div>
						<div className="h-6 bg-gray-900 rounded w-2/3 mx-auto"></div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16 sm:mb-20">
					<h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
						The StrataDeed <span className="text-blue-500">Process</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
						Tokenizing real estate doesn't have to be complicated. Our institutional-grade 
						infrastructure handles the complexity so you can focus on growth.
					</p>
				</motion.div>

				{/* Steps Navigation */}
				<div className="flex flex-col md:flex-row gap-4 mb-16">
					{steps.map((step, index) => (
						<motion.button
							key={step.number}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							onClick={() => handleStepChange(index)}
							className={`flex-1 flex items-center gap-5 p-6 rounded-3xl transition-all duration-500 border ${
								activeStep === index
									? "bg-white/5 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-xl"
									: "bg-transparent border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10"
							}`}>
							<div
								className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
									activeStep === index
										? "bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
										: "bg-white/5"
								}`}>
								<step.icon
									className={`w-7 h-7 transition-all duration-500 ${
										activeStep === index
											? "text-white scale-110"
											: "text-gray-500"
									}`}
								/>
							</div>
							<div className="text-left">
								<div className={`text-xs font-black uppercase tracking-widest mb-1 ${
									activeStep === index ? "text-blue-400" : "text-gray-600"
								}`}>
									Step {step.number}
								</div>
								<div className={`text-xl font-bold ${
									activeStep === index ? "text-white" : "text-gray-400"
								}`}>
									{step.title}
								</div>
							</div>
						</motion.button>
					))}
				</div>

				{/* Main Content Area */}
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Image Side */}
					<div className="lg:col-span-7">
						<div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[40px] overflow-hidden group shadow-2xl border border-white/10">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeStep}
									initial={{ opacity: 0, scale: 1.1 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
									className="absolute inset-0">
									<Image
										src={images[activeStep]}
										alt={currentStep.title}
										fill
										className="object-cover transition-transform duration-1000 group-hover:scale-105"
										sizes="(max-width: 1024px) 100vw, 60vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />
								</motion.div>
							</AnimatePresence>
							
							{/* Floating Overlay Info */}
							<div className="absolute bottom-10 left-10 p-1">
								<motion.div 
									key={activeStep}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl inline-block max-w-xs">
									<div className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Live Status</div>
									<div className="text-white text-lg font-bold mb-4">Verification in progress for property SD-42793</div>
									<div className="flex gap-2">
										<div className="h-1.5 w-12 bg-blue-500 rounded-full" />
										<div className="h-1.5 w-12 bg-blue-500 rounded-full" />
										<div className="h-1.5 w-12 bg-white/20 rounded-full" />
									</div>
								</motion.div>
							</div>
						</div>
					</div>

					{/* Content Side */}
					<div className="lg:col-span-5">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeStep}
								initial={{ opacity: 0, x: 40 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -40 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								className="space-y-8">
								<div>
									<h3 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
										{currentStep.title}
									</h3>
									<p className="text-xl text-gray-400 font-light leading-relaxed">
										{currentStep.description}
									</p>
								</div>

								{/* Dynamic Stats Grid */}
								<div className="grid grid-cols-2 gap-4">
									{currentStep.stats.map((stat, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
											className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
											<div className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">
												{stat.split(" ")[0]}
											</div>
											<div className="text-sm text-gray-500 font-bold uppercase tracking-widest whitespace-nowrap">
												{stat.split(" ").slice(1).join(" ")}
											</div>
										</motion.div>
									))}
								</div>

								{/* CTA Button */}
								<div className="pt-4">
									<button className="group flex items-center gap-4 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(37,99,235,0.2)] transition-all duration-500 overflow-hidden relative">
										<div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 group-hover:animate-shimmer" />
										<span className="relative z-10 text-lg">Digitize Now</span>
										<ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
									</button>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Trust Badges Bar */}
				<motion.div 
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-24 pt-12 border-t border-white/5">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ icon: CheckCircle, value: "25K+", label: "Verified Deeds" },
							{ icon: Globe, value: "45+", label: "Tokenized Regions" },
							{ icon: Zap, value: "<1s", label: "Tx Finality" },
							{ icon: Shield, value: "100%", label: "Compliant" },
						].map((stat, index) => (
							<motion.div
								key={index}
								whileHover={{ y: -5 }}
								className="text-center group">
								<div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600/10 transition-colors">
									<stat.icon className="w-7 h-7 text-blue-500" />
								</div>
								<div className="text-3xl font-black text-white mb-1 tracking-tight">
									{stat.value}
								</div>
								<div className="text-xs text-gray-500 font-black uppercase tracking-[0.2em]">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

