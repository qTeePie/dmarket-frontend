export const ApprovedInfo = ({
  approved,
  loading,
}: {
  approved: string | null;
  loading: boolean;
}) => {
  if (loading) return <div>Loading...</div>;
  return <div>Approved Marketplace: {approved}</div>;
};
