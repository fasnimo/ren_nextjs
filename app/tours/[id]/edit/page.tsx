'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EditTour from '@/components/EditTour';
import { useSession } from 'next-auth/react';

const EditTourPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  const [tour, setTour] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data: session, status } = useSession();

  // 🚫 Redirect if user is not logged in
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/tours/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch tour data');
        }
        const tourData = await response.json();
        setTour(tourData);
      } catch (err) {
        setError('Failed to load tour details');
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  if (status === 'loading' || loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!tour) return <div>No tour data found</div>;

  const handleUpdateSuccess = async () => {
    await fetch(`http://localhost:3001/api/tours/${id}`, { method: 'PUT' });
    router.push(`/tours/${id}/updated`);
  };

  return <EditTour tourData={tour} onUpdateSuccess={handleUpdateSuccess} />;
};

export default EditTourPage;
