import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { DocsSection } from "@/components/sections/docs-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { CTASection } from "@/components/sections/cta-section";

export default function LandingPage() {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<SiteHeader />
			<main className="flex-1">
				<HeroSection />
				<UseCasesSection />
				<DocsSection />
				<CTASection />
			</main>
			<SiteFooter />
		</div>
	);
}
