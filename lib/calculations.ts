export const calculateFinancialProjections = (
	stipend: number,
	subscribers: number,
	subscriptionPrice: number,
	years: number = 5
) => {
	return Array.from({ length: years + 1 }, (_, i) => {
		// PhD earnings with more realistic progression
		const phdEarnings =
			i < 5
				? stipend * (1 + i * 0.03) // 3% annual increase during PhD
				: stipend * 2.5 * (1 + (i - 5) * 0.05); // Post-PhD salary bump with 5% annual increase

		// OnlyFans earnings with more realistic growth and decay
		const growthRate =
			i < 2
				? 0.5 // Rapid initial growth
				: i < 4
				? 0.2 // Moderate growth
				: i < 5
				? 0
				: -0.1; // Plateau then decline

		const onlyfansEarnings =
			subscribers * subscriptionPrice * 12 * (1 + growthRate) ** i * 0.8; // Platform fees

		return {
			year: `Year ${i}`,
			PhD: Math.round(phdEarnings),
			OnlyFans: Math.round(onlyfansEarnings),
		};
	});
};
