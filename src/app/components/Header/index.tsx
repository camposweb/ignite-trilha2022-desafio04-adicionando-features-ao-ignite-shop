import Image from 'next/image'
import Link from 'next/link'
import { Cart } from '../Cart'

export function Header() {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt="img" width={129.74} height={52} />
        </Link>
      </div>
      <div>
        <Cart />
      </div>
    </header>
  )
}
