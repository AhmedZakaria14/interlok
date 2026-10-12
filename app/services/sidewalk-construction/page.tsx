import ServiceDetailView from '@/components/ServiceDetailView';
import {SERVICES} from '@/lib/constants';
export const metadata={title:SERVICES.find(s=>s.slug==='sidewalk-construction')!.title};
export default function Page(){return <ServiceDetailView slug="sidewalk-construction"/>}