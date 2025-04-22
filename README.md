
![Frame](./.github/preview.png)

A modern Magic 8-Ball API built with Next.js that provides fortune-telling
responses to questions. The API offers various endpoints for random, biased, and
sentiment-based responses.

## Features

- Random fortune responses (classic 8-ball experience)
- Sentiment analysis of questions
- Biased responses based on question sentiment
- "Lucky" mode to influence response bias
- Multi-language support
- Edge runtime for optimal performance

## API Endpoints

### Random Response

```
GET /api
```

Returns a completely random 8-ball response.

Query parameters:

- `locale` (optional): Language code for responses (default: "en")

Example response:

```json
{
	"reading": "It is Certain.",
	"locale": "en"
}
```

### Biased Response

```
GET /api/biased
POST /api/biased
```

Returns a response biased by the sentiment of the question and luck factor.

Query/Body parameters:

- `question` (required): The question to analyze
- `lucky` (optional): Boolean to influence the bias (default: false)
- `locale` (optional): Language code for responses (default: "en")

Example response:

```json
{
	"reading": "Outlook good.",
	"question": "Will I win the lottery?",
	"sentiment": {
		/* sentiment analysis details */
	},
	"locale": "en",
	"lucky": false
}
```

### Additional Endpoints

- `GET /api/positive` - Returns only positive responses
- `GET /api/negative` - Returns only negative responses
- `GET /api/neutral` - Returns only neutral responses
- `GET /api/categories` - Returns all responses grouped by category

## Supported Languages

The API supports multiple languages with localized 8-ball responses.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/eight-ball-api.git
cd eight-ball-api
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the application

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework with API routes
- [Sentiment](https://www.npmjs.com/package/sentiment) - Sentiment analysis
  library
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- TypeScript - Type safety and developer experience

## License

This project is open source and available under the MIT license.
