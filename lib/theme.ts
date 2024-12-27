export interface ThemeConfig {
	light: Theme;
	dark: Theme;
}

interface Theme {
	background: string;
	card: string;
	primary: {
		background: string;
		hover: string;
		text: string;
	};
	muted: {
		background: string;
		hover: string;
		text: string;
	};
	border: string;
	ring: string;
}

export const themeConfig: ThemeConfig = {
	light: {
		background: 'bg-gradient-to-b from-purple-50 to-pink-50',
		card: 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/50',
		primary: {
			background: 'bg-gradient-to-r from-purple-500 to-pink-500',
			hover: 'hover:from-purple-600 hover:to-pink-600',
			text: 'text-white',
		},
		muted: {
			background: 'bg-slate-100',
			hover: 'hover:bg-slate-200',
			text: 'text-slate-600',
		},
		border: 'border-purple-100',
		ring: 'ring-purple-200',
	},
	dark: {
		background: 'bg-gradient-to-b from-slate-950 to-purple-950',
		card: 'bg-slate-900/90 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50',
		primary: {
			background: 'bg-gradient-to-r from-purple-500 to-pink-500',
			hover: 'hover:from-purple-600 hover:to-pink-600',
			text: 'text-white',
		},
		muted: {
			background: 'bg-slate-800',
			hover: 'hover:bg-slate-700',
			text: 'text-slate-400',
		},
		border: 'border-slate-800',
		ring: 'ring-purple-900',
	},
};
