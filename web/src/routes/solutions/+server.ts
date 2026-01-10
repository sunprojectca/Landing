import { readLegacyHtml } from '$lib/server/legacy';

export async function GET() {
	const html = await readLegacyHtml('solutions/index.html');
	return new Response(html, {
		headers: {
			'content-type': 'text/html; charset=utf-8'
		}
	});
}
