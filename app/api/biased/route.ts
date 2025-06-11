// ;
export const dynamic = "force-dynamic";
import { biasedResponse } from "@/lib/eight-ball";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const question = searchParams.get("question");
	const lucky = searchParams.get("lucky") === "true";
	const locale = searchParams.get("locale") ?? "en";

	if (!question) {
		return NextResponse.json(
			{ error: "Question is required" },
			{ status: 400 }
		);
	}

	const result = biasedResponse(question, lucky, locale);
	return NextResponse.json({
		reading: result.response,
		question: result.question,
		sentiment: result.sentiment,
		locale,
		lucky,
	});
}

const BiasedRequestSchema = z.object({
	question: z.string().min(1, { message: "Question is required" }),
	lucky: z.boolean().optional().default(false),
	locale: z.string().optional().default("en"),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const validationResult = BiasedRequestSchema.safeParse(body);

		if (!validationResult.success) {
			return NextResponse.json(
				{
					error: "Invalid request body",
					details: validationResult.error.flatten(),
				},
				{ status: 400 }
			);
		}

		const { question, lucky, locale } = validationResult.data;

		const result = biasedResponse(question, lucky, locale);

		return NextResponse.json({
			reading: result.response,
			question: result.question,
			sentiment: result.sentiment,
			locale,
			lucky,
		});
	} catch (error) {
		// Catch errors during request.json() parsing itself
		console.error("Error parsing request body:", error);
		return NextResponse.json(
			{ error: "Invalid JSON in request body" },
			{ status: 400 }
		);
	}
}
