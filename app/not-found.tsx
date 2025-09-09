import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <p className='text-gray-600'>Could not find requested resource</p>
      <Link href="/" className='border rounded-md border-gray-600 px-2 py-1 mt-4'>Return Home</Link>
    </div>
  )
}