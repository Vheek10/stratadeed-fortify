/** @format */

import { ArrowUpRight } from "lucide-react";
import { DashboardMetric } from "./data/dashboard-data";

interface MetricsGridProps {
	metrics: DashboardMetric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
	const getIconBgColor = (color: string) => {
		switch (color) {
			case "blue":
				return "bg-blue-500/10";
			case "emerald":
				return "bg-emerald-500/10";
			case "purple":
				return "bg-purple-500/10";
			case "amber":
				return "bg-amber-500/10";
			default:
				return "bg-gray-500/10";
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
			{metrics.map((metric) => {
				const Icon = metric.icon;
				const iconBgClass = getIconBgColor(metric.color);

				return (
					<div
						key={metric.id}
						className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group`}>
						<div
							className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity`}>
							<Icon className={`w-24 h-24 ${metric.color === 'blue' ? 'text-blue-500' : metric.color === 'emerald' ? 'text-emerald-500' : metric.color === 'purple' ? 'text-purple-500' : 'text-amber-500'}`} />
						</div>

						<div className="relative z-10">
							<div className="flex items-center justify-between mb-4">
								<div className={`p-3 rounded-xl ${iconBgClass}`}>
									<Icon className={`w-6 h-6 ${metric.iconColor}`} />
								</div>
								<div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-semibold">
									<ArrowUpRight className="w-3 h-3" />
									{metric.change}%
								</div>
							</div>
							
							<div>
								<div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
									{metric.title}
								</div>
								<div className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
									{metric.value}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
