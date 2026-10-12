import ServiceDetailView from '@/components/ServiceDetailView';
import {SERVICES} from '@/lib/constants';
export const metadata={title:SERVICES.find(s=>s.slug==='interlock-maintenance')!.title};
export default function Page(){return <ServiceDetailView slug="interlock-maintenance"/>}