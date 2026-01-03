import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout 
      {...baseOptions()}
      className="bg-white dark:bg-fd-background"
      style={{
        backgroundImage: 'linear-gradient(to right, hsl(214.3 31.8% 91.4% / 0.15) 1px, transparent 1px), linear-gradient(to bottom, hsl(214.3 31.8% 91.4% / 0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px, 60px 60px'
      }}
    >
      {children}
    </HomeLayout>
  );
}
