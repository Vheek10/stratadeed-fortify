/** @format */

import Link from "next/link";
import {
	Twitter,
	Linkedin,
	Github,
	Mail,
	Globe,
	Shield,
	Building,
} from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const links = {
		product: [
			{ name: "How It Works", href: "/how-it-works" },
			{ name: "Features", href: "/features" },
			{ name: "Pricing", href: "/pricing" },
			{ name: "API Docs", href: "/api" },
		],
		company: [
			{ name: "About", href: "/about" },
			{ name: "Blog", href: "/blog" },
			{ name: "Careers", href: "/careers" },
			{ name: "Press", href: "/press" },
		],
		legal: [
			{ name: "Privacy Policy", href: "/privacy" },
			{ name: "Terms of Service", href: "/terms" },
			{ name: "Cookie Policy", href: "/cookies" },
			{ name: "Compliance", href: "/compliance" },
		],
		resources: [
			{ name: "Help Center", href: "/help" },
			{ name: "Contact Support", href: "/support" },
			{ name: "Status", href: "/status" },
			{ name: "Partners", href: "/partners" },
		],
	};

	const socialLinks = [
		{ icon: Twitter, href: "https://twitter.com/stratadeed", label: "Twitter" },
		{
			icon: Linkedin,
			href: "https://linkedin.com/company/stratadeed",
			label: "LinkedIn",
		},
		{ icon: Github, href: "https://github.com/stratadeed", label: "GitHub" },
		{ icon: Globe, href: "https://stratadeed.com", label: "Website" },
	];

	return (
		<footer className="mt-20 bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="py-8 sm:py-12 lg:py-16">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
						{/* Brand Section */}
						<div className="sm:col-span-2 lg:col-span-2">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
									<Building className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white">StrataDeed</h3>
									<p className="text-sm text-gray-400">
										Blockchain Real Estate
									</p>
								</div>
							</div>

							<p className="text-gray-400 mb-6 max-w-md">
								Transforming real estate into liquid, transparent, and
								accessible digital assets powered by blockchain technology.
							</p>

							{/* Social Links */}
							<div className="flex items-center gap-4">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<a
											key={social.label}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
											aria-label={social.label}>
											<Icon className="w-5 h-5" />
										</a>
									);
								})}
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
								Product
							</h4>
							<ul className="space-y-3">
								{links.product.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
								Company
							</h4>
							<ul className="space-y-3">
								{links.company.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
								Resources
							</h4>
							<ul className="space-y-3">
								{links.resources.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-400 hover:text-white transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="py-6 sm:py-8 border-t border-gray-800">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
						{/* Left Side */}
						<div className="flex flex-col sm:flex-row items-center gap-4">
							<div className="flex items-center gap-2 text-sm">
								<Shield className="w-4 h-4 text-emerald-400" />
								<span>Secure & Compliant</span>
							</div>
							<div className="hidden sm:block w-px h-4 bg-gray-700" />
							<div className="flex items-center gap-2 text-sm">
								<Mail className="w-4 h-4 text-blue-400" />
								<a
									href="mailto:hello@stratadeed.com"
									className="hover:text-white transition-colors">
									hello@stratadeed.com
								</a>
							</div>
						</div>

						{/* Middle - Copyright */}
						<div className="text-center">
							<p className="text-sm text-gray-400">
								© {currentYear} StrataDeed. All rights reserved.
							</p>
							<p className="text-xs text-gray-500 mt-1">
								Built for Mantle Hackathon | MVP Version
							</p>
						</div>

						{/* Right Side - Legal Links */}
						<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
							{links.legal.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
									{link.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
