"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocsSidebar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ href: "#introduction", label: "Introduction" },
		{ href: "#getting-started", label: "Getting Started" },
		{
			href: "#endpoints",
			label: "API Endpoints",
			children: [
				{ href: "#random-fortune", label: "Random Fortune" },
				{ href: "#categories", label: "Categories" },
				{ href: "#specific-category", label: "Specific Category" },
				{ href: "#biased-fortune", label: "Biased Fortune" },
			],
		},
		{ href: "#localization", label: "Localization" },
		{ href: "#usage-limits", label: "Usage Limits" },
	];

	return (
		<>
			{/* Mobile navigation dropdown - only shown in mobile view div */}
			<div className="md:hidden">
				<Button
					variant="outline"
					className="w-full flex justify-between items-center"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					<span>Navigation</span>
					{mobileMenuOpen ? (
						<ChevronUp className="h-4 w-4 ml-2" />
					) : (
						<ChevronDown className="h-4 w-4 ml-2" />
					)}
				</Button>
				{mobileMenuOpen && (
					<div className="mt-2 p-4 border rounded-md bg-card shadow-sm">
						<nav className="space-y-4">
							<ul className="space-y-4">
								{navItems.map((item, index) => (
									<li key={index}>
										<a
											href={item.href}
											className="block text-sm font-medium hover:text-primary transition-colors"
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.label}
										</a>
										{item.children && (
											<ul className="mt-2 ml-4 space-y-2">
												{item.children.map((childItem, childIndex) => (
													<li key={childIndex}>
														<a
															href={childItem.href}
															className="block text-xs hover:text-primary text-muted-foreground transition-colors"
															onClick={() => setMobileMenuOpen(false)}
														>
															{childItem.label}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						</nav>
					</div>
				)}
			</div>

			{/* Desktop sidebar - shown in desktop container */}
			<div className="hidden md:block">
				<nav className="space-y-2">
					<div className="font-medium">On this page</div>
					<ul className="space-y-2 text-sm">
						{navItems.map((item, index) => (
							<li key={index}>
								{!item.children ? (
									<a
										href={item.href}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										{item.label}
									</a>
								) : (
									<div>
										<a
											href={item.href}
											className="text-muted-foreground hover:text-foreground transition-colors"
										>
											{item.label}
										</a>
										<ul className="mt-2 ml-4 space-y-2">
											{item.children.map((childItem, childIndex) => (
												<li key={childIndex}>
													<a
														href={childItem.href}
														className="text-muted-foreground hover:text-foreground transition-colors text-xs"
													>
														{childItem.label}
													</a>
												</li>
											))}
										</ul>
									</div>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
}
