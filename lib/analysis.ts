interface CareerMetrics {
	// PhD metrics
	stipend: number;
	yearsLeft: number;
	stressLevel: number;
	publicationCount: number;

	// OnlyFans metrics
	followers: number;
	contentComfort: number;
	attractiveness: number;
	competitionLevel: number;
}

export function analyzeCareerPaths(metrics: CareerMetrics) {
	// Calculate scores
	const phdScore = calculatePhdScore(metrics);
	const ofScore = calculateOfScore(metrics);

	// Generate analysis points
	const analysis = {
		phd: generatePhdAnalysis(metrics),
		onlyfans: generateOfAnalysis(metrics),
	};

	return {
		phdScore,
		ofScore,
		analysis,
	};
}

function calculatePhdScore(metrics: CareerMetrics): number {
	// More balanced scoring system
	const stipendScore = (metrics.stipend / 50000) * 20; // Max 20 points
	const timeScore = ((8 - metrics.yearsLeft) / 7) * 15; // Max 15 points
	const stressScore = ((11 - metrics.stressLevel) / 10) * 15; // Max 15 points
	const publicationScore = (metrics.publicationCount / 5) * 25; // Max 25 points
	const careerStabilityScore = 25; // Fixed points for long-term stability

	return Math.min(
		100,
		stipendScore +
			timeScore +
			stressScore +
			publicationScore +
			careerStabilityScore
	);
}

function calculateOfScore(metrics: CareerMetrics): number {
	// More realistic scoring based on market factors
	const followersScore = (metrics.followers / 100000) * 30; // Max 30 points
	const comfortScore = (metrics.contentComfort / 10) * 20; // Max 20 points
	const attractivenessScore = (metrics.attractiveness / 10) * 25; // Max 25 points
	const competitionPenalty = (metrics.competitionLevel / 10) * 15; // Max 15 points penalty
	const platformRiskScore = 10; // Fixed points accounting for platform stability

	return Math.min(
		100,
		followersScore +
			comfortScore +
			attractivenessScore +
			platformRiskScore -
			competitionPenalty
	);
}

function generatePhdAnalysis(metrics: CareerMetrics): string[] {
	const analysis = [];

	if (metrics.stipend < 25000) {
		analysis.push('Ramen noodles will be your best friend 🍜');
	} else if (metrics.stipend > 35000) {
		analysis.push('Wow, you might afford real food! 🥑');
	}

	if (metrics.publicationCount >= 3) {
		analysis.push('Your citation game is stronger than your coffee ☕');
	}

	if (metrics.stressLevel > 7) {
		analysis.push('Time to befriend the campus therapy dog 🐕');
	}

	return analysis;
}

function generateOfAnalysis(metrics: CareerMetrics): string[] {
	const analysis = [];

	if (metrics.followers > 50000) {
		analysis.push('Move over Kardashians! 👑');
	}

	if (metrics.attractiveness >= 8) {
		analysis.push('The camera loves you more than it loves sleep 📸');
	}

	if (metrics.competitionLevel > 7) {
		analysis.push(
			'The thirst trap market is saturated, time to innovate! 💡'
		);
	}

	return analysis;
}

function getLifestyleImpact(metrics: CareerMetrics) {
	const phdImpact = {
		workLifeBalance: metrics.stressLevel > 7 ? 'Poor' : 'Moderate',
		flexibility: 'Limited',
		location: 'Fixed',
		timeCommitment: `${metrics.yearsLeft} years + postdoc`,
	};

	const ofImpact = {
		workLifeBalance: 'Flexible',
		flexibility: 'High',
		location: 'Remote',
		timeCommitment: 'Immediate start',
	};

	return { phd: phdImpact, of: ofImpact };
}

function getFinancialProjection(metrics: CareerMetrics) {
	const phdProjection = {
		shortTerm: metrics.stipend,
		mediumTerm: metrics.stipend * 2.5, // Post-PhD salary
		longTerm: metrics.stipend * 3.5, // Established career
	};

	const monthlyOF = metrics.followers * 0.05 * 15; // 5% conversion at $15
	const ofProjection = {
		shortTerm: monthlyOF * 12,
		mediumTerm: monthlyOF * 1.5 * 12, // 50% growth
		longTerm: monthlyOF * 0.7 * 12, // 30% decline
	};

	return { phd: phdProjection, of: ofProjection };
}
