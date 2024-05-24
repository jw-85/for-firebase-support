import Link from 'next/link'
 
export default function WelcomePage() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>drft is still under construction, get it touch via the link below and we will let you know when we launch!</p>
      <Link href="/contact">Contact</Link>
    </div>
  )
}