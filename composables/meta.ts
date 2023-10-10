import type { MetaFlatInput } from '@unhead/schema';

const DefaultImage = {
	url: '/images/metaimage.png',
	alt: 'MetaImage',
	width: 1200,
	height: 628
} satisfies SeoOptionsImage;
const DefaultRobots = {
	all: true
} satisfies SeoOptionsRobots;

export function defineSeo(options: SeoOptions) {
	const image = options.image ?? DefaultImage;

	useSeoMeta({ title: options.title });
	useServerSeoMeta({
		title: options.title,
		description: options.description,

		ogTitle: options.title,
		ogDescription: options.description,
		ogImage: image.url,
		ogImageAlt: image.alt,
		ogImageWidth: image.width,
		ogImageHeight: image.height,

		twitterTitle: options.title,
		twitterDescription: options.description,
		twitterImage: image.url,
		twitterImageAlt: image.alt,
		twitterImageWidth: image.width,
		twitterImageHeight: image.height,

		robots: options.robots ?? DefaultRobots
	});
}

interface SeoOptions {
	title: string;
	description?: string;
	image?: SeoOptionsImage;
	robots?: string | SeoOptionsRobots;
}

interface SeoOptionsImage {
	url: string;
	alt: string;
	width: number;
	height: number;
}

type SeoOptionsRobots = Partial<MetaFlatInput['robots']>;
