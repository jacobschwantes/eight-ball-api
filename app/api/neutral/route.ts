// ;
export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getLocalizedCategory } from "@/lib/localization/responses";

export async function GET(request: Request) {
	// Check for locale in the request
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get("locale") || "en";

	const responses = getLocalizedCategory(locale, "neutral");

	// Get random neutral response
	const randomIndex = Math.floor(Math.random() * responses.length);

	return NextResponse.json({
		reading: responses[randomIndex],
		category: "neutral",
		locale,
	});
}
