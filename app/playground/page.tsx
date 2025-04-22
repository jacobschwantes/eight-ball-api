import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Playground } from "@/components/playground/playground";

export const metadata = {
	title: "8Ball API Playground | Magic 8-Ball Fortune API",
	description:
		"Test the 8Ball API directly in your browser with our interactive playground",
	alternates: {
		canonical: "/playground",
	},
};

export default function PlaygroundPage() {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<SiteHeader />
			<main className="flex-1">
				<Playground />
			</main>
			<SiteFooter />
		</div>
	);
}
