import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import Page from '@/components/Page';
import DashboardShell from '@/components/DashboardShell';
import SiteTable from '@/components/SiteTable';
import SiteEmptyState from '@/components/SiteEmptyState';
import SiteTableHeader from '@/components/SiteTableHeader';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  if (data.sites.length) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTable sites={data.sites} />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteTableHeader />
      {<SiteEmptyState />}
    </DashboardShell>
  );
};

const DashboardPage = () => (
  <Page name="Dashboard" path="/sites">
    <Dashboard />
  </Page>
);

export default DashboardPage;
