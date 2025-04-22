"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BaseUrl() {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="rounded-xl border bg-muted/50 p-4 md:p-6">
			<h3 className="font-mono text-xs md:text-sm mb-3 md:mb-4">Base URL</h3>
			<div className="-mx-4 md:mx-0 px-4 md:px-0 overflow-hidden">
				<div className="flex items-center justify-between rounded-md bg-muted p-3 md:p-4 overflow-hidden">
					<code className="text-xs md:text-sm break-all mr-2">
						https://eightballapi.com
					</code>
					<Button
						variant="ghost"
						size="icon"
						className="h-6 w-6 flex-shrink-0"
						onClick={() => copyToClipboard("https://eightballapi.com")}
					>
						{copied ? (
							<Check className="h-3 w-3 md:h-4 md:w-4" />
						) : (
							<Copy className="h-3 w-3 md:h-4 md:w-4" />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}
