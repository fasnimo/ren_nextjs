'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CreateTour from '@/components/CreateTour';

const CreateTourPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div className="text-center mt-10">Checking login status...</div>;
  }

  return <CreateTour />;
};

export default CreateTourPage;

