interface CareerMetrics {
	// PhD metrics
	stipend: number;
	yearsLeft: number;
	stressLevel: number;
	publicationCount: number;

	// OnlyFans metrics
	followers: number;
	contentComfort: number;
	marketingSkills: number;
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
	const marketingScore = (metrics.marketingSkills / 10) * 25; // Max 25 points
	const competitionPenalty = (metrics.competitionLevel / 10) * 15; // Max 15 points penalty
	const platformRiskScore = 10; // Fixed points accounting for platform stability

	return Math.min(
		100,
		followersScore +
			comfortScore +
			marketingScore +
			platformRiskScore -
			competitionPenalty
	);
}

function generatePhdAnalysis(metrics: CareerMetrics): string[] {
	const analysis = [];

	if (metrics.stipend < 25000) {
		analysis.push('Low stipend - consider additional funding sources');
	} else if (metrics.stipend > 35000) {
		analysis.push('Competitive stipend - good financial foundation');
	}

	if (metrics.publicationCount >= 3) {
		analysis.push(
			'Strong publication record - well positioned for academia'
		);
	} else if (metrics.publicationCount <= 1) {
		analysis.push('Focus on increasing publication output');
	}

	if (metrics.stressLevel > 7) {
		analysis.push('High stress - consider work-life balance strategies');
	}

	// Add more targeted advice based on metrics
	return analysis;
}

function generateOfAnalysis(metrics: CareerMetrics): string[] {
	const analysis = [];

	const projectedIncome = metrics.followers * 0.05 * 15; // Assume 5% conversion rate at $15

	if (metrics.followers < 10000) {
		analysis.push('Focus on building social media presence first');
	} else if (metrics.followers > 50000) {
		analysis.push(
			`Potential monthly income: $${projectedIncome.toLocaleString()}`
		);
	}

	if (metrics.marketingSkills < 6) {
		analysis.push('Invest in marketing and personal branding skills');
	}

	if (metrics.competitionLevel > 7) {
		analysis.push(
			'High competition - need strong differentiation strategy'
		);
	}

	// Add more market-based advice
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
