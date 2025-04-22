import { ContactSection } from "./contact-section";

export function UsageLimitsSection() {
	return (
		<div id="usage-limits" className="space-y-4 md:space-y-6">
			<h2 className="text-xl md:text-2xl font-bold tracking-tight">
				Usage Limits
			</h2>
			<p className="text-sm md:text-base">
				The Magic 8 Ball API is free to use with reasonable usage limits:
			</p>
			<ul className="list-disc pl-6 space-y-1 md:space-y-2 text-sm md:text-base">
				<li>Rate limit: 100 requests per minute per IP address</li>
				<li>No authentication required for standard usage</li>
			</ul>

			<ContactSection />
		</div>
	);
}
