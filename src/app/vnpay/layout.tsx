import Link from 'next/link'

const LayoutVnpay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Your header or any other layout elements */}
      <main>{children}</main>
      <footer className='flex justify-center items-center h-20 bg-gray-100 dark:bg-gray-800'>
        <Link href='/'>
          <span className='text-2xl text-blue-500 hover:underline cursor-pointer'>
            Back to Home
          </span>
        </Link>
      </footer>
    </div>
  )
}

export default LayoutVnpay
