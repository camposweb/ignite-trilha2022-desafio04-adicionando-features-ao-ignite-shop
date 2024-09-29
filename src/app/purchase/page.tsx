import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Purchase',
}


export default async function Purchase() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-3 text-center">
      <Image
        src={'/logo.svg'}
        alt="img"
        width={129.74}
        height={52}
        className="mt-16"
      />
      <div className="flex w-[316px] h-[140px] bg-title mt-28"></div>
      <h1 className="font-roboto text-3xl font-bold text-title mt-12">
        Compra efetuada!
      </h1>
      <p className='font-roboto font-normal text-xl text-title mt-6'>
        Uhuul Diego Fernandes, sua compra de 3 camisetas já está a caminho da
        sua casa.
      </p>
      <Link href={'/'} className='font-roboto font-bold text-xl text-principal mt-16'>Voltar ao catálogo</Link>
    </div>
  )
}
