// ;
export const dynamic = "force-dynamic";
import { randomResponse } from "@/lib/eight-ball";
import { NextResponse } from "next/server";
import { getLocalizedResponses } from "@/lib/localization/responses";

export async function GET(request: Request) {
	// Check for query parameters
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get("locale") ?? "en";

	// Get the appropriate response
	let response;
	if (locale === "en") {
		// Use the original implementation for English
		response = randomResponse();
	} else {
		// For other locales, use the localized responses
		const responses = getLocalizedResponses(locale);
		const allResponses = [
			...responses.positive,
			...responses.negative,
			...responses.neutral,
		];

		const randomIndex = Math.floor(Math.random() * allResponses.length);
		response = allResponses[randomIndex];
	}

	return NextResponse.json({
		reading: response,
		locale,
	});
}
