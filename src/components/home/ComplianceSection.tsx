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
import { useState, useEffect } from "react";
import Image from "next/image";

// Simplified real estate images
const REAL_ESTATE_IMAGES = [
	{
		url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
		alt: "Modern transparent building representing transparency",
		category: "Transparency",
	},
	{
		url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
		alt: "Secure commercial building with clean architectural lines",
		category: "Security",
	},
	{
		url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
		alt: "Blockchain technology network connections",
		category: "Technology",
	},
	{
		url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
		alt: "Urban development with regulated construction",
		category: "Regulation",
	},
];

const complianceFeatures = [
	{
		icon: FileCheck,
		title: "Document Verification",
		description: "Automated checks against global registries",
		metric: "100% Verified",
		color: "blue",
		imageIndex: 0,
	},
	{
		icon: Shield,
		title: "Smart Contract Security",
		description: "Escrow-protected multi-signature transactions",
		metric: "Zero Disputes",
		color: "emerald",
		imageIndex: 1,
	},
	{
		icon: Database,
		title: "Blockchain Records",
		description: "Permanent, tamper-proof transaction history",
		metric: "24/7 Audit Trail",
		color: "indigo",
		imageIndex: 2,
	},
	{
		icon: Globe,
		title: "Global Compliance",
		description: "Adherence to international regulations",
		metric: "45+ Countries",
		color: "cyan",
		imageIndex: 3,
	},
];

const performanceMetrics = [
	{ icon: Zap, label: "Transaction Speed", value: "< 2s" },
	{ icon: CheckCircle, label: "Verification Rate", value: "100%" },
	{ icon: Users, label: "Countries Covered", value: "45+" },
	{ icon: Lock, label: "Security Uptime", value: "99.99%" },
];

export default function ComplianceSection() {
	const [activeFeature, setActiveFeature] = useState(0);

	const currentImage =
		REAL_ESTATE_IMAGES[complianceFeatures[activeFeature].imageIndex];

	return (
		<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12 lg:mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-6">
						<Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
						<span className="text-sm font-medium text-blue-600 dark:text-blue-400">
							COMPLIANCE BUILT-IN
						</span>
					</div>

					<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Engineered for{" "}
						<span className="text-blue-600 dark:text-blue-400">Compliance</span>
					</h1>

					<p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Built around global regulations from day one. Every transaction
						meets the highest standards of security and compliance.
					</p>
				</div>

				{/* Feature Navigation */}
				<div className="flex overflow-x-auto gap-2 mb-8 pb-2">
					{complianceFeatures.map((feature, index) => {
						const Icon = feature.icon;
						const isActive = activeFeature === index;

						return (
							<button
								key={feature.title}
								onClick={() => setActiveFeature(index)}
								className={`flex items-center gap-3 px-4 py-3 rounded-lg whitespace-nowrap transition-all ${
									isActive
										? `bg-${feature.color}-100 dark:bg-${feature.color}-900/30 text-${feature.color}-700 dark:text-${feature.color}-400 border border-${feature.color}-200 dark:border-${feature.color}-800`
										: "bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
								}`}>
								<div
									className={`p-2 rounded-lg ${
										isActive
											? `bg-${feature.color}-500/10`
											: "bg-gray-100 dark:bg-gray-700"
									}`}>
									<Icon
										className={`w-4 h-4 ${
											isActive
												? `text-${feature.color}-600 dark:text-${feature.color}-400`
												: "text-gray-500"
										}`}
									/>
								</div>
								<div className="text-left">
									<div className="font-medium text-sm">{feature.title}</div>
									<div className="text-xs text-gray-500 dark:text-gray-500">
										{feature.metric}
									</div>
								</div>
							</button>
						);
					})}
				</div>

				{/* Main Content */}
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
					{/* Image */}
					<div className="relative aspect-square rounded-2xl overflow-hidden">
						<Image
							src={currentImage.url}
							alt={currentImage.alt}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

						{/* Image Badge */}
						<div className="absolute top-4 left-4">
							<div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
								<div className="text-sm text-white font-medium">
									{currentImage.category}
								</div>
							</div>
						</div>

						{/* Metric Badge */}
						<div className="absolute bottom-4 right-4">
							<div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
								<div className="text-lg font-bold text-gray-900 dark:text-white">
									{complianceFeatures[activeFeature].metric}
								</div>
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="flex flex-col justify-center">
						<div className="space-y-6">
							<div>
								<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
									{complianceFeatures[activeFeature].title}
								</h2>
								<p className="text-lg text-gray-600 dark:text-gray-300">
									{complianceFeatures[activeFeature].description}
								</p>
							</div>

							{/* Feature Details */}
							<div className="space-y-4">
								<div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
									<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
									<span>Automated validation processes</span>
								</div>
								<div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
									<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
									<span>Real-time monitoring and alerts</span>
								</div>
								<div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
									<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
									<span>Complete audit trail</span>
								</div>
							</div>

							{/* Progress Indicators */}
							<div className="flex items-center gap-2">
								{complianceFeatures.map((_, index) => (
									<button
										key={index}
										onClick={() => setActiveFeature(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											index === activeFeature
												? `bg-${complianceFeatures[activeFeature].color}-500 scale-125`
												: "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
										}`}
										aria-label={`View ${complianceFeatures[index].title}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Performance Metrics */}
				<div className="mb-12">
					<div className="text-center mb-8">
						<h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
							Industry-Leading Performance
						</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Setting new standards in real estate technology
						</p>
					</div>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{performanceMetrics.map((metric, index) => {
							const Icon = metric.icon;
							return (
								<div
									key={metric.label}
									className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
									<Icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
									<div className="space-y-1">
										<div className="text-2xl font-bold text-gray-900 dark:text-white">
											{metric.value}
										</div>
										<div className="text-sm text-gray-600 dark:text-gray-400">
											{metric.label}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* CTA */}
				<div className="text-center">
					<div className="max-w-2xl mx-auto mb-8">
						<div className="inline-flex items-center gap-3 px-6 py-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-6">
							<Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
							<p className="text-lg font-semibold text-gray-900 dark:text-white">
								This isn't a shortcut. It's an upgrade for the entire value
								chain.
							</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="inline-flex items-center gap-3 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
							<span>Explore Compliance</span>
							<ArrowRight className="w-5 h-5" />
						</button>

						<button className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
							Schedule Review
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
