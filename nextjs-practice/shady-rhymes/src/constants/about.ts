// Constants
import { APP_IMAGE_URLS } from '@constants/images';

export interface AboutItemProps {
  title: string;
  description: string;
  href: APP_IMAGE_URLS;
}

export const ABOUT_ITEM: AboutItemProps[] = [
  {
    title: 'Professionalism',
    description: 'We deliver the final work with great professional way.',
    href: APP_IMAGE_URLS.CHECK_ICON,
  },
  {
    title: 'Smooth workflow',
    description: 'We provide the most easy smoth workflow of interior design.',
    href: APP_IMAGE_URLS.ICON_DOUBLE,
  },
  {
    title: 'Trusted Platform',
    description: 'People trust us since we openend the company.',
    href: APP_IMAGE_URLS.ICON_STICK,
  },
  {
    title: 'Qualified employee',
    description: 'Our employees are the best of the field from the city.',
    href: APP_IMAGE_URLS.ICON_STAR,
  },
];
