declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"posts": {
"daily-creative/dc0109.md": {
  id: "daily-creative/dc0109.md",
  slug: "daily-creative/dc0109",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0110.md": {
  id: "daily-creative/dc0110.md",
  slug: "daily-creative/dc0110",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0111.md": {
  id: "daily-creative/dc0111.md",
  slug: "daily-creative/dc0111",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0112.md": {
  id: "daily-creative/dc0112.md",
  slug: "daily-creative/dc0112",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0113.md": {
  id: "daily-creative/dc0113.md",
  slug: "daily-creative/dc0113",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0114.md": {
  id: "daily-creative/dc0114.md",
  slug: "daily-creative/dc0114",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0115.md": {
  id: "daily-creative/dc0115.md",
  slug: "daily-creative/dc0115",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0116.md": {
  id: "daily-creative/dc0116.md",
  slug: "daily-creative/dc0116",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0117.md": {
  id: "daily-creative/dc0117.md",
  slug: "daily-creative/dc0117",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0118.md": {
  id: "daily-creative/dc0118.md",
  slug: "daily-creative/dc0118",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0119.md": {
  id: "daily-creative/dc0119.md",
  slug: "daily-creative/dc0119",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0120.md": {
  id: "daily-creative/dc0120.md",
  slug: "daily-creative/dc0120",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0121.md": {
  id: "daily-creative/dc0121.md",
  slug: "daily-creative/dc0121",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0122.md": {
  id: "daily-creative/dc0122.md",
  slug: "daily-creative/dc0122",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0123.md": {
  id: "daily-creative/dc0123.md",
  slug: "daily-creative/dc0123",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0124.md": {
  id: "daily-creative/dc0124.md",
  slug: "daily-creative/dc0124",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0125.md": {
  id: "daily-creative/dc0125.md",
  slug: "daily-creative/dc0125",
  body: string,
  collection: "posts",
  data: any
},
"daily-creative/dc0126.md": {
  id: "daily-creative/dc0126.md",
  slug: "daily-creative/dc0126",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0121.md": {
  id: "philosophy/2023/01/ph0121.md",
  slug: "philosophy/2023/01/ph0121",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0122.md": {
  id: "philosophy/2023/01/ph0122.md",
  slug: "philosophy/2023/01/ph0122",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0123.md": {
  id: "philosophy/2023/01/ph0123.md",
  slug: "philosophy/2023/01/ph0123",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0124.md": {
  id: "philosophy/2023/01/ph0124.md",
  slug: "philosophy/2023/01/ph0124",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0125.md": {
  id: "philosophy/2023/01/ph0125.md",
  slug: "philosophy/2023/01/ph0125",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0126.md": {
  id: "philosophy/2023/01/ph0126.md",
  slug: "philosophy/2023/01/ph0126",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0127.md": {
  id: "philosophy/2023/01/ph0127.md",
  slug: "philosophy/2023/01/ph0127",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0128.md": {
  id: "philosophy/2023/01/ph0128.md",
  slug: "philosophy/2023/01/ph0128",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0129.md": {
  id: "philosophy/2023/01/ph0129.md",
  slug: "philosophy/2023/01/ph0129",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0130.md": {
  id: "philosophy/2023/01/ph0130.md",
  slug: "philosophy/2023/01/ph0130",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/01/ph0131.md": {
  id: "philosophy/2023/01/ph0131.md",
  slug: "philosophy/2023/01/ph0131",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0201.md": {
  id: "philosophy/2023/02/ph0201.md",
  slug: "philosophy/2023/02/ph0201",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0202.md": {
  id: "philosophy/2023/02/ph0202.md",
  slug: "philosophy/2023/02/ph0202",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0203.md": {
  id: "philosophy/2023/02/ph0203.md",
  slug: "philosophy/2023/02/ph0203",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0204.md": {
  id: "philosophy/2023/02/ph0204.md",
  slug: "philosophy/2023/02/ph0204",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0205.md": {
  id: "philosophy/2023/02/ph0205.md",
  slug: "philosophy/2023/02/ph0205",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0206.md": {
  id: "philosophy/2023/02/ph0206.md",
  slug: "philosophy/2023/02/ph0206",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0207.md": {
  id: "philosophy/2023/02/ph0207.md",
  slug: "philosophy/2023/02/ph0207",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0208.md": {
  id: "philosophy/2023/02/ph0208.md",
  slug: "philosophy/2023/02/ph0208",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0209.md": {
  id: "philosophy/2023/02/ph0209.md",
  slug: "philosophy/2023/02/ph0209",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0210.md": {
  id: "philosophy/2023/02/ph0210.md",
  slug: "philosophy/2023/02/ph0210",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0211.md": {
  id: "philosophy/2023/02/ph0211.md",
  slug: "philosophy/2023/02/ph0211",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0212.md": {
  id: "philosophy/2023/02/ph0212.md",
  slug: "philosophy/2023/02/ph0212",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0213.md": {
  id: "philosophy/2023/02/ph0213.md",
  slug: "philosophy/2023/02/ph0213",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0214.md": {
  id: "philosophy/2023/02/ph0214.md",
  slug: "philosophy/2023/02/ph0214",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0215.md": {
  id: "philosophy/2023/02/ph0215.md",
  slug: "philosophy/2023/02/ph0215",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0216.md": {
  id: "philosophy/2023/02/ph0216.md",
  slug: "philosophy/2023/02/ph0216",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0217.md": {
  id: "philosophy/2023/02/ph0217.md",
  slug: "philosophy/2023/02/ph0217",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0218.md": {
  id: "philosophy/2023/02/ph0218.md",
  slug: "philosophy/2023/02/ph0218",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0219.md": {
  id: "philosophy/2023/02/ph0219.md",
  slug: "philosophy/2023/02/ph0219",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0220.md": {
  id: "philosophy/2023/02/ph0220.md",
  slug: "philosophy/2023/02/ph0220",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0221.md": {
  id: "philosophy/2023/02/ph0221.md",
  slug: "philosophy/2023/02/ph0221",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0222.md": {
  id: "philosophy/2023/02/ph0222.md",
  slug: "philosophy/2023/02/ph0222",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0223.md": {
  id: "philosophy/2023/02/ph0223.md",
  slug: "philosophy/2023/02/ph0223",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0224.md": {
  id: "philosophy/2023/02/ph0224.md",
  slug: "philosophy/2023/02/ph0224",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0225.md": {
  id: "philosophy/2023/02/ph0225.md",
  slug: "philosophy/2023/02/ph0225",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0226.md": {
  id: "philosophy/2023/02/ph0226.md",
  slug: "philosophy/2023/02/ph0226",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0227.md": {
  id: "philosophy/2023/02/ph0227.md",
  slug: "philosophy/2023/02/ph0227",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/02/ph0228.md": {
  id: "philosophy/2023/02/ph0228.md",
  slug: "philosophy/2023/02/ph0228",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/03/ph0301.md": {
  id: "philosophy/2023/03/ph0301.md",
  slug: "philosophy/2023/03/ph0301",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/03/ph0302.md": {
  id: "philosophy/2023/03/ph0302.md",
  slug: "philosophy/2023/03/ph0302",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/03/ph0303.md": {
  id: "philosophy/2023/03/ph0303.md",
  slug: "philosophy/2023/03/ph0303",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/03/ph0304.md": {
  id: "philosophy/2023/03/ph0304.md",
  slug: "philosophy/2023/03/ph0304",
  body: string,
  collection: "posts",
  data: any
},
"philosophy/2023/03/ph0305.md": {
  id: "philosophy/2023/03/ph0305.md",
  slug: "philosophy/2023/03/ph0305",
  body: string,
  collection: "posts",
  data: any
},
},

	};

	type ContentConfig = never;
}
