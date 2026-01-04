import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/logo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo  />,
      url: 'https://nodedrop.app',
      transparentMode: 'top',
    },
  };
}
