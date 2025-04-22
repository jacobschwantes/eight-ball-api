"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
	id: number;
	left: number;
	top: number;
	size: number;
	duration: number;
}

export function EnhancedMagicEightBall() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("Ask me anything...");
	const [isShaking, setIsShaking] = useState(false);
	const [isRevealing, setIsRevealing] = useState(false);
	const [sparkles, setSparkles] = useState<Sparkle[]>([]);
	const ballRef = useRef<HTMLDivElement>(null);

	// Generate random sparkles
	useEffect(() => {
		const sparkleInterval = setInterval(() => {
			if (sparkles.length < 15) {
				const newSparkle = {
					id: Math.random(),
					left: Math.random() * 100,
					top: Math.random() * 100,
					size: Math.random() * 10 + 2,
					duration: Math.random() * 2 + 1,
				};
				setSparkles((prev) => [...prev, newSparkle]);
			}
		}, 300);

		const removeSparkle = setInterval(() => {
			setSparkles((prev) => prev.slice(1));
		}, 1000);

		return () => {
			clearInterval(sparkleInterval);
			clearInterval(removeSparkle);
		};
	}, [sparkles]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!question.trim()) return;

		// Start shaking animation
		setIsShaking(true);
		setAnswer("Revealing your destiny...");

		// Add extra sparkles during shake
		const extraSparkles = Array.from({ length: 10 }, () => ({
			id: Math.random(),
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 10 + 2,
			duration: Math.random() * 2 + 1,
		}));

		setSparkles((prev) => [...prev, ...extraSparkles]);

		// Stop shaking after 1.5 seconds
		setTimeout(async () => {
			setIsShaking(false);
			setIsRevealing(true);

			// Reveal answer with dramatic pause
			const result = await fetch("/api/biased", {
				method: "POST",
				body: JSON.stringify({ question, lucky: true }),
			});
			const data = await result.json();
			setAnswer(data.reading);
			setIsRevealing(false);
		}, 1500);
	};

	return (
		<div className="relative flex flex-col items-center justify-center w-full h-auto mx-auto">
			{/* Mobile-friendly container with proper scaling */}
			<div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
				{/* Magical circle underneath */}
				<motion.div
					className="absolute w-[80%] h-[80%] rounded-full bg-purple-600/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ repeat: Infinity, duration: 2 }}
				/>

				<motion.div
					className="absolute w-[70%] h-[70%] rounded-full bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
				/>

				{/* Sparkles */}
				<AnimatePresence>
					{sparkles.map((sparkle) => (
						<motion.div
							key={sparkle.id}
							className="absolute rounded-full bg-white"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: Math.random() * 0.7 + 0.3, scale: 1 }}
							exit={{ opacity: 0, scale: 0 }}
							transition={{ duration: sparkle.duration }}
							style={{
								left: `${sparkle.left}%`,
								top: `${sparkle.top}%`,
								width: `${sparkle.size}px`,
								height: `${sparkle.size}px`,
								boxShadow:
									"0 0 10px 2px rgba(255, 255, 255, 0.7), 0 0 20px 6px rgba(125, 80, 230, 0.5)",
							}}
						/>
					))}
				</AnimatePresence>

				{/* Main Magic 8 Ball */}
				<motion.div
					ref={ballRef}
					className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black 
					flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					initial={{ rotate: 0, x: 0, y: 0 }}
					animate={
						isShaking
							? {
									x: [0, -8, 8, -8, 8, 0],
									y: [0, -5, 5, -5, 5, 0],
									rotate: [0, -2, 2, -2, 2, 0],
							  }
							: {}
					}
					transition={
						isShaking
							? {
									repeat: 3,
									duration: 0.7,
									ease: "easeInOut",
							  }
							: {}
					}
				>
					{/* Reflective highlight */}
					<div className="absolute top-[5%] left-[10%] w-[40%] h-[20%] bg-white/10 rounded-full blur-sm transform rotate-[-30deg]"></div>

					{/* Inner circle */}
					<motion.div
						className="absolute inset-[15%] rounded-full bg-black flex items-center justify-center overflow-hidden"
						animate={isRevealing ? { opacity: [0.7, 1, 0.7] } : {}}
						transition={isRevealing ? { repeat: Infinity, duration: 1 } : {}}
					>
						{/* Triangle */}
						<div className="absolute top-[10%] w-0 h-0 border-l-[15px] sm:border-l-[20px] border-l-transparent border-r-[15px] sm:border-r-[20px] border-r-transparent border-b-[25px] sm:border-b-[35px] border-b-indigo-600/80"></div>

						{/* Answer window */}
						<div className="relative w-[80%] h-[80%] rounded-full bg-indigo-900 flex items-center justify-center overflow-hidden">
							{/* Mystical swirl background */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-indigo-600/20 to-blue-900/30"
								animate={{ rotate: 360 }}
								transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
							/>

							{/* Glowing effect */}
							<motion.div
								className="absolute inset-2 rounded-full bg-indigo-800/50 backdrop-blur-sm"
								animate={
									isRevealing ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.7 }
								}
								transition={
									isRevealing
										? { repeat: Infinity, duration: 0.5 }
										: { duration: 0.3 }
								}
							/>

							{/* Answer text */}
							<div className="relative z-20 text-center p-2">
								<motion.p
									className="text-white text-xs sm:text-sm md:text-base font-[family-name:var(--font-instrument-serif)]"
									animate={
										isRevealing
											? {
													scale: [1, 1.1, 1],
													opacity: [0.7, 1, 0.7],
											  }
											: {
													scale: 1,
													opacity: 1,
											  }
									}
									transition={
										isRevealing
											? {
													repeat: Infinity,
													duration: 0.5,
											  }
											: {
													duration: 0.3,
											  }
									}
								>
									{answer}
								</motion.p>
							</div>
						</div>
					</motion.div>

					{/* Outer glow */}
					<motion.div
						className="absolute inset-0 -z-10 bg-purple-600/5 rounded-full blur-xl"
						animate={{ opacity: [0.3, 0.7, 0.3] }}
						transition={{ repeat: Infinity, duration: 2 }}
						style={{ transform: "scale(1.2)" }}
					/>
				</motion.div>
			</div>

			{/* Question input - now as a separate component below the ball for better layout */}
			<div className="w-full max-w-xs sm:max-w-sm md:max-w-md -mt-14">
				<form onSubmit={handleSubmit} className="space-y-2">
					<div className="relative">
						<Input
							type="text"
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
							placeholder="Ask the Magic 8 Ball..."
							className="bg-background border-input rounded-md text-sm sm:text-base py-2 pl-3 pr-10"
						/>
						<Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-500" />
					</div>
					<Button
						type="submit"
						disabled={isShaking || isRevealing}
						className="w-full bg-purple-700 hover:bg-purple-800 text-white text-sm sm:text-base"
					>
						Get Your Fortune
					</Button>
				</form>
			</div>
		</div>
	);
}
