import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/metadata';
import { seoData } from '@/lib/seo/pageData';

export const metadata: Metadata = generateMetadata(seoData.home);
