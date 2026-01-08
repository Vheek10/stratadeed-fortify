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
import Link from "next/link";
import { useState, useEffect } from "react";
import { getRandomImage } from "@/utils/realEstateImages";

const steps = [
	{
		number: "01",
		icon: FileCheck,
		title: "Digitize Property",
		description:
			"Transform real estate into secure digital tokens with automated verification",
		color: "blue",
		imageCategory: "modern-buildings",
		stats: ["<48h Verification", "99.8% Success"],
	},
	{
		number: "02",
		icon: Shield,
		title: "Secure Investment",
		description:
			"Fractional ownership through blockchain-powered smart contracts",
		color: "emerald",
		imageCategory: "blockchain-tech",
		stats: ["Global 24/7 Access", "0 Disputes"],
	},
	{
		number: "03",
		icon: Database,
		title: "Track & Manage",
		description: "Real-time transparency with immutable blockchain records",
		color: "cyan",
		imageCategory: "cityscapes",
		stats: ["<2min Transactions", "Bank-grade Security"],
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
			<section className="py-20 px-4 sm:px-6 bg-gray-900">
				<div className="max-w-6xl mx-auto">
					<div className="animate-pulse space-y-8">
						<div className="h-12 bg-gray-800 rounded-lg w-1/3 mx-auto"></div>
						<div className="h-6 bg-gray-800 rounded w-2/3 mx-auto"></div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-900">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						How It Works
					</h2>
					<p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
						Transform real estate into accessible digital assets in three simple
						steps
					</p>
				</div>

				{/* Steps Navigation */}
				<div className="flex flex-col sm:flex-row gap-4 mb-12">
					{steps.map((step, index) => (
						<button
							key={step.number}
							onClick={() => handleStepChange(index)}
							className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
								activeStep === index
									? `bg-gradient-to-r from-${step.color}-600 to-${step.color}-500 text-white shadow-lg`
									: "bg-gray-800 text-gray-300 hover:bg-gray-700"
							}`}>
							<div
								className={`w-10 h-10 rounded-lg flex items-center justify-center ${
									activeStep === index
										? "bg-white/20"
										: `bg-${step.color}-500/10`
								}`}>
								<step.icon
									className={`w-5 h-5 ${
										activeStep === index
											? "text-white"
											: `text-${step.color}-400`
									}`}
								/>
							</div>
							<div className="text-left">
								<div className="text-sm font-medium">Step {step.number}</div>
								<div className="font-semibold">{step.title}</div>
							</div>
						</button>
					))}
				</div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Image */}
					<div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden">
						<Image
							src={images[activeStep]}
							alt={currentStep.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						<div className="absolute top-6 left-6">
							<div
								className={`bg-gradient-to-r from-${currentStep.color}-600 to-${currentStep.color}-500 px-4 py-2 rounded-lg text-white font-bold`}>
								{currentStep.number}
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col justify-center">
						<div className="space-y-6">
							<div>
								<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
									{currentStep.title}
								</h3>
								<p className="text-lg text-gray-300">
									{currentStep.description}
								</p>
							</div>

							{/* Stats */}
							<div className="flex gap-4">
								{currentStep.stats.map((stat, index) => (
									<div
										key={index}
										className="bg-gray-800/50 rounded-lg p-4 flex-1 border border-gray-700">
										<div className="text-xl font-bold text-white mb-1">
											{stat.split(" ")[0]}
										</div>
										<div className="text-sm text-gray-400">
											{stat.split(" ").slice(1).join(" ")}
										</div>
									</div>
								))}
							</div>

							{/* Step Indicators */}
							<div className="flex items-center gap-4">
								{steps.map((_, index) => (
									<button
										key={index}
										onClick={() => handleStepChange(index)}
										className={`w-3 h-3 rounded-full transition-all ${
											activeStep === index
												? `bg-${currentStep.color}-500 scale-125`
												: "bg-gray-600 hover:bg-gray-500"
										}`}
										aria-label={`Go to step ${index + 1}`}
									/>
								))}
							</div>

							{/* CTA */}
							<div className="pt-6">
								<button className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
									<span>Get Started</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Stats */}
				<div className="mt-16 pt-8 border-t border-gray-800">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ icon: CheckCircle, value: "25K+", label: "Properties" },
							{ icon: Globe, value: "45+", label: "Countries" },
							{ icon: Zap, value: "<2s", label: "Transactions" },
							{ icon: Shield, value: "100%", label: "Secure" },
						].map((stat, index) => (
							<div
								key={index}
								className="text-center p-4">
								<stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
								<div className="text-2xl font-bold text-white mb-1">
									{stat.value}
								</div>
								<div className="text-sm text-gray-400">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
