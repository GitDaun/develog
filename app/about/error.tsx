'use client' // Error boundaries must be Client Components
 
import { startTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  const router = useRouter()
  
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className='border rounded-md border-gray-600 px-2 py-1 mt-4'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            startTransition(() => {
              router.refresh()
              reset()
            })
          }
        }
      >
        Try again
      </button>
    </div>
  )
}