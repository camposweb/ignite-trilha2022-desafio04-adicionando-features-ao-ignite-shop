import { Handbag } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export function Product() {
  return (
    <Link href={'/'}>
      <div className="group relative flex h-[656px] w-[696px] cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-t from-begin to-end">
        <Image
          src={'/shirt01.png'}
          alt=""
          width={401}
          height={401}
          className="object-cover"
        />
        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-elements p-2 opacity-90 transition duration-200 ease-in-out group-hover:translate-y-0">
          <div className="flex flex-col">
            <strong className="font-roboto text-xl font-bold text-title">
              Camiseta Beyond the Limits
            </strong>
            <span className="font-roboto text-2xl font-bold text-light">
              R$ 79,90
            </span>
          </div>
          <div className="rounded-md bg-principal p-3">
            <Handbag width={32} height={32} className="text-white" />
          </div>
        </footer>
      </div>
    </Link>
  )
}
