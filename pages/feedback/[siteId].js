import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from 'utils/fetcher';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import FeedbackTable from '@/components/FeedbackTable';

export default function SiteFeedback() {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user?.token] : null,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader siteName={data?.site?.name} />
      {data?.feedback?.length > 0 ? (
        <FeedbackTable feedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
