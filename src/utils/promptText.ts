export function extractPromptTextFromSource(source: string): string {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const headingIndex = lines.findIndex((line) =>
    /^#{1,6} .*(?:프롬프트|Prompt).*$/.test(line.trim()),
  );
  const openingIndex = lines.findIndex(
    (line, index) =>
      index > headingIndex && /^(`{3,})(?:\w+)?\s*$/.test(line.trim()),
  );

  if (headingIndex === -1 || openingIndex === -1) {
    throw new Error('Prompt detail page does not contain a prompt code block');
  }

  const openingFence = lines[openingIndex].trim().match(/^(`{3,})/)?.[1];
  if (!openingFence) {
    throw new Error('Prompt detail page has an invalid prompt code fence');
  }

  const closingIndex = lines.findIndex(
    (line, index) => index > openingIndex && line.trim() === openingFence,
  );
  if (closingIndex === -1) {
    throw new Error('Prompt detail page has an unclosed prompt code fence');
  }

  return lines.slice(openingIndex + 1, closingIndex).join('\n');
}
