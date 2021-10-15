import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import fetcher from 'utils/fetcher';
import SiteTable from '@/components/SiteTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import FeedbackTable from '@/components/FeedbackTable';

export default function MyFeedback() {
  const { user } = useAuth();
  const { data } = useSWR(
    user ? ['/api/feedback', user?.token] : null,
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
      <FeedbackTableHeader />
      {data?.feedback?.length > 0 ? (
        <FeedbackTable feedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
