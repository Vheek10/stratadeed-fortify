/** @format */
"use client";

import {
	MapPin,
	Eye,
	Bed,
	Bath,
	Square,
	Users,
	ArrowRight,
} from "lucide-react";

interface Property {
	id: number;
	title: string;
	description: string;
	location: string;
	price: number;
	bedrooms: number;
	bathrooms: number;
	squareFeet: number;
	capacity: number;
	views: number;
	isFeatured: boolean;
	country: string;
	createdAt: string;
	type: string;
}

interface PropertyCardProps {
	property: Property;
	imageUrl: string;
}

export default function PropertyCard({
	property,
	imageUrl,
}: PropertyCardProps) {
	return (
		<div className="group">
			<div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
				<div className="relative h-40 overflow-hidden">
					<img
						src={imageUrl}
						alt={property.title}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
					{property.isFeatured && (
						<div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded">
							Premium
						</div>
					)}
					<div className="absolute bottom-3 left-3">
						<div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
							<MapPin className="w-3 h-3" />
							<span>{property.location.split(",")[0]}</span>
						</div>
					</div>
				</div>

				<div className="p-4 flex-1 flex flex-col">
					<div className="mb-3">
						<h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 line-clamp-1">
							{property.title}
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2">
							{property.description}
						</p>
					</div>

					<div className="grid grid-cols-4 gap-2 mb-4">
						<div className="text-center">
							<Bed className="w-4 h-4 text-gray-400 mx-auto mb-1" />
							<div className="text-sm font-semibold text-gray-900 dark:text-white">
								{property.bedrooms}
							</div>
							<div className="text-xs text-gray-500">Beds</div>
						</div>
						<div className="text-center">
							<Bath className="w-4 h-4 text-gray-400 mx-auto mb-1" />
							<div className="text-sm font-semibold text-gray-900 dark:text-white">
								{property.bathrooms}
							</div>
							<div className="text-xs text-gray-500">Baths</div>
						</div>
						<div className="text-center">
							<Square className="w-4 h-4 text-gray-400 mx-auto mb-1" />
							<div className="text-sm font-semibold text-gray-900 dark:text-white">
								{property.squareFeet.toLocaleString()}
							</div>
							<div className="text-xs text-gray-500">Sqft</div>
						</div>
						<div className="text-center">
							<Users className="w-4 h-4 text-gray-400 mx-auto mb-1" />
							<div className="text-sm font-semibold text-gray-900 dark:text-white">
								{property.capacity}
							</div>
							<div className="text-xs text-gray-500">Max</div>
						</div>
					</div>

					<div className="mt-auto">
						<div className="flex justify-between items-center mb-3">
							<div>
								<div className="text-xl font-bold text-gray-900 dark:text-white">
									${property.price.toLocaleString()}
								</div>
								<div className="text-xs text-gray-500">
									${(property.price / property.squareFeet).toFixed(2)}/sqft
								</div>
							</div>
							<div className="flex items-center gap-1 text-xs text-gray-500">
								<Eye className="w-3 h-3" />
								<span>{property.views}</span>
							</div>
						</div>

						<button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 text-sm">
							View Details
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
