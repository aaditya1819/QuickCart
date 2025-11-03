'use client';
import { assets } from '@/assets/assets';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const OrderPlaced = () => {
  const { router } = useAppContext();
  const { user } = useUser();

  // 🔹 This function sends the confirmation email via /api/send-order-email
  const sendOrderEmail = async () => {
    try {
      // You can later replace these with dynamic values from context or database
      const orderId = 'ORDER' + Math.floor(Math.random() * 100000);
      const total = 27600;

      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user?.primaryEmailAddress?.emailAddress,
          name: user?.firstName || 'Customer',
          orderId,
          total,
        }),
      });

      const result = await response.json();
      if (result.success) {
        console.log('✅ Order confirmation email sent successfully to', user?.primaryEmailAddress?.emailAddress);
      } else {
        console.error('❌ Failed to send email:', result.error);
      }
    } catch (error) {
      console.error('⚠️ Error while sending email:', error);
    }
  };

  useEffect(() => {
    if (user) {
      // Send email right after the page loads
      sendOrderEmail();
    }

    // Redirect to My Orders page after 5 seconds
    const timer = setTimeout(() => {
      router.push('/my-orders');
    }, 5000);

    return () => clearTimeout(timer);
  }, [user]);

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className='flex justify-center items-center relative'>
        <Image className='absolute p-5' src={assets.checkmark} alt='' />
        <div className='animate-spin rounded-full h-24 w-24 border-4 border-t-green-300 border-gray-200'></div>
      </div>
      <div className='text-center text-2xl font-semibold'>
        Order Placed Successfully
      </div>
      <p className='text-gray-500 text-sm'>
        A confirmation email has been sent to your registered address.
      </p>
    </div>
  );
};

export default OrderPlaced;
