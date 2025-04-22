"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function MagicEightBallDemo() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("Ask a question...");
	const [isShaking, setIsShaking] = useState(false);

	const responses = [
		"It is certain",
		"Without a doubt",
		"Yes definitely",
		"You may rely on it",
		"As I see it, yes",
		"Most likely",
		"Outlook good",
		"Signs point to yes",
		"Reply hazy, try again",
		"Ask again later",
		"Better not tell you now",
		"Cannot predict now",
		"Don't count on it",
		"My reply is no",
		"My sources say no",
		"Very doubtful",
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!question.trim()) return;

		setIsShaking(true);
		setAnswer("Thinking...");

		setTimeout(() => {
			const randomResponse =
				responses[Math.floor(Math.random() * responses.length)];
			setAnswer(randomResponse);
			setIsShaking(false);
		}, 1000);
	};

	return (
		<div
			className={`text-center ${
				isShaking ? "animate-[shake_0.5s_ease-in-out_infinite]" : ""
			}`}
		>
			<form onSubmit={handleSubmit} className="space-y-2">
				<Input
					type="text"
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					placeholder="Ask a question..."
					className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm"
				/>
				<Button
					type="submit"
					size="sm"
					className="w-full bg-white/20 hover:bg-white/30 text-white"
				>
					Shake
				</Button>
			</form>
			<div className="mt-4 h-16 flex items-center justify-center">
				<p className="text-white">{answer}</p>
			</div>
		</div>
	);
}
