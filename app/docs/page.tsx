import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Metadata } from "next";
import { DocsHeader } from "@/components/docs/header";
import { DocsSidebar } from "@/components/docs/sidebar";
import {
	IntroductionSection,
	GettingStartedSection,
} from "@/components/docs/introduction";
import { BaseUrl } from "@/components/docs/base-url";
import {
	RandomFortuneEndpoint,
	CategoriesEndpoint,
	SpecificCategoryEndpoint,
	BiasedFortuneEndpoint,
	BiasedFortunePostEndpoint,
} from "@/components/docs/endpoints";
import { LocalizationSection } from "@/components/docs/localization";
import { UsageLimitsSection } from "@/components/docs/usage-limits";

export const metadata: Metadata = {
	title: "8Ball API Documentation | Magic 8-Ball Fortune API",
	description:
		"Complete reference guide to integrate fortune telling Magic 8-Ball API into your applications",
	alternates: {
		canonical: "/docs",
	},
};

export default function DocsPage() {
	return (
		<div className="flex min-h-[100dvh] flex-col">
			<SiteHeader />
			<main className="flex-1">
				<DocsHeader />

				<section className="w-full py-8 md:py-12 lg:py-24">
					<div className="container px-4 md:px-6 mx-auto max-w-full md:max-w-5xl">
						<div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-12 lg:gap-16">
							<div className="hidden md:block sticky self-start top-24">
								<DocsSidebar />
							</div>

							<div className="md:hidden mb-8">
								<DocsSidebar />
							</div>

							<div className="space-y-10 md:space-y-16 max-w-[100vw] overflow-x-auto md:max-w-none">
								{/* Introduction */}
								<IntroductionSection />

								{/* Getting Started */}
								<GettingStartedSection />
								<BaseUrl />

								{/* API Endpoints */}
								<div id="endpoints" className="space-y-4 md:space-y-6">
									<h2 className="text-xl md:text-2xl font-bold tracking-tight">
										API Endpoints
									</h2>

									<div className="rounded-xl border p-3 md:p-6 space-y-6 overflow-hidden">
										<RandomFortuneEndpoint />
										<CategoriesEndpoint />
										<SpecificCategoryEndpoint />
										<BiasedFortuneEndpoint />
										<BiasedFortunePostEndpoint />
									</div>
								</div>

								{/* Localization Section */}
								<LocalizationSection />

								{/* Usage Limits */}
								<UsageLimitsSection />
							</div>
						</div>
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
