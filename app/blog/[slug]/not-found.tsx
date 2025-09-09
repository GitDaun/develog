import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h1 className='text-2xl font-bold'>404 Not Found</h1>
      <p className='text-gray-600'>요청하신 블로그 글을 찾을 수 없습니다</p>
      <div className='mt-4'>
        <div>다른 글을 보고 싶으시면</div>
        <ul className='list-disc list-inside'>
          <li>1st blog post</li>
          <li>2nd blog post</li>
          <li>3rd blog post</li>
        </ul>
      </div>
      <Link href="/" className='border rounded-md border-gray-600 px-2 py-1 mt-4'>Return Home</Link>
    </div>
  )
}