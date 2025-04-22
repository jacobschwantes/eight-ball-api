import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function ContactSection() {
	return (
		<div className="rounded-xl border bg-purple-50 dark:bg-purple-900/10 p-4 md:p-6 mt-4 md:mt-8">
			<h3 className="font-medium text-sm md:text-base mb-2">Need Help?</h3>
			<p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
				If you need assistance or have questions about implementing the 8Ball
				API, feel free to reach out or check our GitHub repository for examples.
			</p>
			<div className="flex flex-col xs:flex-row gap-3">
				<Link href="mailto:contact@eightballapi.com">
					<Button variant="outline" size="sm" className="w-full xs:w-auto">
						<MessageSquare className="mr-2 h-3 w-3 md:h-4 md:w-4" />
						Contact Support
					</Button>
				</Link>
				<Link href="https://github.com/jacobschwantes/eight-ball-api">
					<Button variant="outline" size="sm" className="w-full xs:w-auto">
						GitHub Repository
					</Button>
				</Link>
			</div>
		</div>
	);
}
