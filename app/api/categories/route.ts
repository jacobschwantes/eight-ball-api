// ;
import { NextResponse } from "next/server";
import { getLocalizedResponses } from "@/lib/localization/responses";

export async function GET(request: Request) {
	// Check for locale in the request
	const { searchParams } = new URL(request.url);
	const locale = searchParams.get("locale") || "en";

	const responses = getLocalizedResponses(locale);

	return NextResponse.json({
		positive: responses.positive,
		neutral: responses.neutral,
		negative: responses.negative,
		locale,
	});
}
