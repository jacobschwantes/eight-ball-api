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

interface CodeBlockProps {
	code: string;
	language?: string;
}

export function CodeBlock({ code, language = "text" }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [code, language]);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const formattedCode =
		language === "json" && typeof code === "string" ? code : code;

	return (
		<div className="relative max-w-full overflow-hidden">
			<pre className={`language-${language} max-h-[400px] overflow-y-auto p-4`}>
				<code ref={codeRef} className={`language-${language}`}>
					{formattedCode}
				</code>
			</pre>
			<Button
				variant="ghost"
				size="icon"
				className="absolute right-2 top-2 h-6 w-6"
				onClick={() => copyToClipboard(code)}
			>
				{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
			</Button>
		</div>
	);
}
