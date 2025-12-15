/** @format */

import { Bell } from "lucide-react";

interface DashboardHeaderProps {
	title: string;
	subtitle: string;
}

export default function DashboardHeader({
	title,
	subtitle,
}: DashboardHeaderProps) {
	return (
		<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
			<div>
				<h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
					{title}
				</h1>
				<p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
			</div>

			<div className="flex items-center gap-3">
				<div className="relative">
					<button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
						<Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
						<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
					</button>
				</div>
			</div>
		</div>
	);
}
