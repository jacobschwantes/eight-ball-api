"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between mx-auto px-4">
				<Link href="/" className="flex gap-2 items-center text-xl font-bold">
					<Image
						src="/favicon.ico"
						alt="8Ball API"
						width={32}
						height={32}
						className="translate-y-0.5"
					/>
					<span>8Ball API</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="/"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						Home
					</Link>
					<Link
						href="/docs"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						Docs
					</Link>
					<Link
						href="/playground"
						className="text-sm font-medium transition-colors hover:text-primary"
					>
						Playground
					</Link>
					<Button asChild>
						<Link href="/playground">Try It Now</Link>
					</Button>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden border-t">
					<nav className="container flex flex-col py-4 gap-4">
						<Link
							href="/"
							className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/docs"
							className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Docs
						</Link>
						<Link
							href="/playground"
							className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Playground
						</Link>
						<div className="px-4 pt-2">
							<Button asChild className="w-full">
								<Link href="/playground" onClick={() => setMenuOpen(false)}>
									Try It Now
								</Link>
							</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
