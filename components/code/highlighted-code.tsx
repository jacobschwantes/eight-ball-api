"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-tomorrow.css";

interface HighlightedCodeProps {
	code: string;
	language?: string;
	className?: string;
}

export function HighlightedCode({
	code,
	language = "text",
	className = "",
}: HighlightedCodeProps) {
	const [copied, setCopied] = useState(false);
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [code]);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div
			className={`relative overflow-hidden text-sm -mx-4 md:mx-0 p-3 ${className} rounded-xl`}
		>
			<div className="overflow-x-auto">
				<pre
					className={`language-${language} max-h-[400px] overflow-y-auto p-2 md:p-4 text-xs md:text-sm rounded-md`}
				>
					<code
						ref={codeRef}
						className={`language-${language} break-words whitespace-pre-wrap rounded-md`}
					>
						{code}
					</code>
				</pre>
			</div>
			<Button
				variant="ghost"
				size="icon"
				className="absolute right-1 top-1 h-6 w-6 md:right-2 md:top-2"
				onClick={() => copyToClipboard(code)}
			>
				{copied ? (
					<Check className="h-3 w-3 md:h-4 md:w-4" />
				) : (
					<Copy className="h-3 w-3 md:h-4 md:w-4" />
				)}
			</Button>
		</div>
	);
}
