import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const legacyRoot = fileURLToPath(new URL('../../../static/legacy/', import.meta.url));

function normalizeLegacyHtml(html: string): string {
	// Repoint legacy build assets into the SvelteKit app's static folder.
	return html
		.replaceAll('./_app/', '/legacy/_app/')
		.replaceAll('../_app/', '/legacy/_app/')
		.replaceAll('./favicon.svg', '/favicon.svg')
		.replaceAll('../favicon.svg', '/favicon.svg');
}

export async function readLegacyHtml(relativePath: string): Promise<string> {
	const filePath = path.join(legacyRoot, relativePath);
	const html = await readFile(filePath, 'utf8');
	return normalizeLegacyHtml(html);
}
