'use client'
import { useSearchParams } from 'next/navigation'
import { PARAMETER_USER } from '@/config/API_config';
export default function vnpay(){
    const searchParams = useSearchParams()
  
  const code= searchParams.get(PARAMETER_USER.vnPay) ;
  console.log(code)

  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-4">
        {code === '00' || '02' ? 'Success Payment' : 'Failure Payment'}
      </h2>
      <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        {code === '00' || '02' ? (
          <p className="text-green-600">Your payment was successful.</p>
        ) : (
          <p className="text-red-600">There was an issue with your payment.</p>
        )}
      </div>
    </div>
  );
}
