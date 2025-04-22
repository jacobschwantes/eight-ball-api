export function LocalizationSection() {
	const locales = [
		{ code: "en", name: "English (default)" },
		{ code: "es", name: "Spanish" },
		{ code: "fr", name: "French" },
		{ code: "de", name: "German" },
		{ code: "hi", name: "Hindi" },
		{ code: "ru", name: "Russian" },
	];

	return (
		<div id="localization" className="space-y-4 md:space-y-6">
			<h2 className="text-xl md:text-2xl font-bold tracking-tight">
				Localization
			</h2>
			<p className="text-sm md:text-base">
				The 8Ball API supports multiple languages. You can request localized
				responses by adding the{" "}
				<code className="text-xs md:text-sm bg-muted px-1 py-0.5 rounded">
					locale
				</code>{" "}
				parameter to your requests.
			</p>

			<div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
				<table className="w-full border-collapse min-w-[280px]">
					<thead>
						<tr className="border-b">
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Locale Code
							</th>
							<th className="py-2 px-2 md:px-4 text-left font-medium text-xs md:text-sm">
								Language
							</th>
						</tr>
					</thead>
					<tbody>
						{locales.map((locale) => (
							<tr key={locale.code} className="border-b">
								<td className="py-2 px-2 md:px-4 font-mono text-xs md:text-sm">
									{locale.code}
								</td>
								<td className="py-2 px-2 md:px-4 text-xs md:text-sm">
									{locale.name}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="rounded-lg border bg-card p-3 md:p-4 mt-2 md:mt-4">
				<h3 className="font-mono text-xs md:text-sm font-semibold break-words">
					Example: GET /api/positive?locale=fr
				</h3>
				<p className="mt-1 md:mt-2 text-xs md:text-sm text-muted-foreground">
					Returns a random positive response in French.
				</p>
			</div>
		</div>
	);
}
