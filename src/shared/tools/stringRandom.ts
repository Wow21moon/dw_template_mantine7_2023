export function stringRandom(len?: number, base?: string): string {
	len = len || 10
	base = base || 'abcdefghjkmnpqrstwxyz123456789'

	let result = ''
	const max_position = base.length - 1
	for (let i = 0; i < len; i++) {
		const position = Math.floor(Math.random() * max_position)
		result += base.substring(position, position + 1)
	}
	return result
}
