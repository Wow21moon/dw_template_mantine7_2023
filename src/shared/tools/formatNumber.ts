export function formatNumber(num: number | undefined): string {
	if (num === undefined) {
		return ''
	}

	const integerPart = Math.floor(num)
	return integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
