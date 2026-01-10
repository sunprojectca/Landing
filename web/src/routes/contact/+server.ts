import { readLegacyHtml } from '$lib/server/legacy';

export async function GET() {
	const html = await readLegacyHtml('contact/index.html');
	return new Response(html, {
		headers: {
			'content-type': 'text/html; charset=utf-8'
		}
	});
}
