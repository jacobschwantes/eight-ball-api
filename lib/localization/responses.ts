// Localization for Magic 8-Ball responses
// Each locale follows the same structure as the English responses

type LocaleResponses = {
	positive: string[];
	neutral: string[];
	negative: string[];
};

type Locales = {
	[locale: string]: LocaleResponses;
};

export const locales: Locales = {
	// English (default)
	en: {
		positive: [
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
		],
		neutral: [
			"Reply hazy, try again.",
			"Ask again later.",
			"Better not tell you now.",
			"Cannot predict now.",
			"Concentrate and ask again.",
		],
		negative: [
			"Don't count on it.",
			"My reply is no.",
			"My sources say no.",
			"Outlook not so good.",
			"Very doubtful.",
		],
	},
	// Spanish
	es: {
		positive: [
			"Es cierto.",
			"Definitivamente es así.",
			"Sin duda.",
			"Sí, definitivamente.",
			"Puedes confiar en ello.",
			"Como yo lo veo, sí.",
			"Lo más probable.",
			"Perspectiva buena.",
			"Sí.",
			"Las señales apuntan a que sí.",
		],
		neutral: [
			"Respuesta confusa, inténtalo de nuevo.",
			"Pregunta más tarde.",
			"Mejor no te lo digo ahora.",
			"No puedo predecirlo ahora.",
			"Concéntrate y pregunta de nuevo.",
		],
		negative: [
			"No cuentes con ello.",
			"Mi respuesta es no.",
			"Mis fuentes dicen que no.",
			"La perspectiva no es tan buena.",
			"Muy dudoso.",
		],
	},
	// French
	fr: {
		positive: [
			"C'est certain.",
			"C'est décidément ainsi.",
			"Sans aucun doute.",
			"Oui, définitivement.",
			"Vous pouvez compter là-dessus.",
			"À mon avis, oui.",
			"Très probablement.",
			"Bonnes perspectives.",
			"Oui.",
			"Les signes indiquent que oui.",
		],
		neutral: [
			"Réponse floue, essayez à nouveau.",
			"Demandez à nouveau plus tard.",
			"Mieux vaut ne pas vous le dire maintenant.",
			"Impossible de prédire maintenant.",
			"Concentrez-vous et demandez à nouveau.",
		],
		negative: [
			"N'y comptez pas.",
			"Ma réponse est non.",
			"Mes sources disent non.",
			"Les perspectives ne sont pas si bonnes.",
			"Très douteux.",
		],
	},
	// German
	de: {
		positive: [
			"Es ist sicher.",
			"Es ist eindeutig so.",
			"Ohne Zweifel.",
			"Ja, definitiv.",
			"Du kannst dich darauf verlassen.",
			"Meiner Ansicht nach, ja.",
			"Höchstwahrscheinlich.",
			"Gute Aussichten.",
			"Ja.",
			"Die Zeichen deuten auf ja.",
		],
		neutral: [
			"Antwort unklar, versuche es erneut.",
			"Frage später noch einmal.",
			"Besser ich sage es dir jetzt nicht.",
			"Kann jetzt nicht vorhersagen.",
			"Konzentriere dich und frage erneut.",
		],
		negative: [
			"Zähle nicht darauf.",
			"Meine Antwort ist nein.",
			"Meine Quellen sagen nein.",
			"Aussichten nicht so gut.",
			"Sehr zweifelhaft.",
		],
	},
	// Hindi
	hi: {
		positive: [
			"यह निश्चित है।",
			"यह निश्चित रूप से ऐसा है।",
			"बिना किसी संदेह के।",
			"हां बिल्कुल।",
			"आप इस पर भरोसा कर सकते हैं।",
			"जैसा मैं देखता हूं, हां।",
			"सबसे संभावित।",
			"दृष्टिकोण अच्छा है।",
			"हां।",
			"संकेत हां की ओर इशारा करते हैं।",
		],
		neutral: [
			"जवाब धुंधला है, फिर से कोशिश करें।",
			"बाद में फिर पूछें।",
			"अभी आपको नहीं बताऊंगा।",
			"अभी भविष्यवाणी नहीं कर सकता।",
			"ध्यान केंद्रित करें और फिर से पूछें।",
		],
		negative: [
			"इस पर भरोसा मत करो।",
			"मेरा जवाब नहीं है।",
			"मेरे स्रोत कहते हैं कि नहीं।",
			"दृष्टिकोण इतना अच्छा नहीं है।",
			"बहुत संदिग्ध।",
		],
	},
	// Russian
	ru: {
		positive: [
			"Это точно.",
			"Это определенно так.",
			"Без сомнения.",
			"Да, определенно.",
			"Вы можете на это рассчитывать.",
			"Как я вижу, да.",
			"Наиболее вероятно.",
			"Хорошие перспективы.",
			"Да.",
			"Знаки указывают на да.",
		],
		neutral: [
			"Ответ неясен, попробуйте еще раз.",
			"Спросите позже.",
			"Лучше не говорить вам сейчас.",
			"Не могу предсказать сейчас.",
			"Сконцентрируйтесь и спросите снова.",
		],
		negative: [
			"Не рассчитывайте на это.",
			"Мой ответ - нет.",
			"Мои источники говорят нет.",
			"Перспективы не очень хорошие.",
			"Очень сомнительно.",
		],
	},
};

// Helper function to get responses by locale
export function getLocalizedResponses(locale: string): LocaleResponses {
	// Default to English if locale not found
	return locales[locale] || locales.en;
}

// Helper function to get a specific category for a locale
export function getLocalizedCategory(
	locale: string,
	category: keyof LocaleResponses
): string[] {
	const localizedResponses = getLocalizedResponses(locale);
	return localizedResponses[category];
}
