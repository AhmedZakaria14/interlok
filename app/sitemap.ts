import type {MetadataRoute} from 'next';
import {SERVICES} from '@/lib/constants';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.APP_URL?.replace(/\/$/,'');if(!base)return [];return ['', '/services','/projects','/about','/contact','/privacy-policy',...SERVICES.map(s=>`/services/${s.slug}`)].map(path=>({url:base+path}));}
