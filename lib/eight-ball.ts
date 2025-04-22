import Sentiment from "sentiment";
import { getLocalizedResponses } from "./localization/responses";

const sentiment = new Sentiment();

export const positive = [
	"It is Certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes definitely.",
	"You may rely on it.",
	"As I see it, yes.",
	"Most likely.",
	"Outlook good.",
	"Yes.",
	"Signs point to yes.",
];

export const neutral = [
	"Reply hazy, try again.",
	"Ask again later.",
	"Better not tell you now.",
	"Cannot predict now.",
	"Concentrate and ask again.",
];

export const negative = [
	"Don't count on it.",
	"My reply is no.",
	"My sources say no.",
	"Outlook not so good.",
	"Very doubtful.",
];

const allResponses = positive.concat(negative, neutral);

// Returns a completely random eight ball response
export function randomResponse(): string {
	return allResponses[Math.floor(Math.random() * allResponses.length)];
}

// Define the sentiment analysis result type based on the sentiment library
interface SentimentAnalysisResult {
	score: number;
	comparative: number;
	calculation: Record<string, number>[];
	tokens: string[];
	words: string[];
	positive: string[];
	negative: string[];
}

export type BiasedResponseDetails = {
	response: string;
	score: number;
	sentiment: SentimentAnalysisResult;
	question?: string;
};

// Returns a biased eight ball response based on question sentiment and luck
export function biasedResponse(
	question: string,
	lucky: boolean,
	locale: string = "en"
): BiasedResponseDetails {
	const rating = sentiment.analyze(question);
	let response: string;

	// Get the appropriate responses based on locale
	const responseSet =
		locale === "en"
			? { positive, negative, neutral }
			: getLocalizedResponses(locale);

	if ((rating.score > 0 && lucky) || (rating.score < 0 && !lucky)) {
		// Positive sentiment and lucky OR Negative sentiment and unlucky -> Positive response
		response =
			responseSet.positive[
				Math.floor(Math.random() * responseSet.positive.length)
			];
	} else if ((rating.score < 0 && lucky) || (rating.score > 0 && !lucky)) {
		// Negative sentiment and lucky OR Positive sentiment and unlucky -> Negative response
		response =
			responseSet.negative[
				Math.floor(Math.random() * responseSet.negative.length)
			];
	} else {
		// Neutral sentiment (or score 0) -> Neutral response
		response =
			responseSet.neutral[
				Math.floor(Math.random() * responseSet.neutral.length)
			];
	}

	return {
		response,
		question,
		score: rating.score,
		sentiment: rating as SentimentAnalysisResult,
	};
}
