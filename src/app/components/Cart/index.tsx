import { Handbag, X } from '@phosphor-icons/react/dist/ssr'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ItemCart } from '../ItemCart'

export function Cart() {
  return (
    <Collapsible.Root>
      <div className="relative flex">
        <Collapsible.Trigger asChild className="">
          <button className="items-center rounded-md bg-elements p-2">
            <Handbag className="h-6 w-6 text-icon" />
            <div className="absolute -right-3 top-[-8px] flex h-6 w-6 items-center justify-center overflow-visible rounded-full border-2 border-background bg-principal">
              <span className="text-sm font-bold text-white">1</span>
            </div>
          </button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="fixed right-0 top-0 z-20 flex h-screen w-screen flex-col bg-elements transition duration-200 ease-in-out data-[state=closed]:hidden lg:w-[480px] lg:translate-x-0"
      >
        <Collapsible.Trigger asChild>
          <button className="flex justify-end pr-8 pt-8 data-[state=closed]:hidden">
            <X className="h-6 w-6 text-icon" />
          </button>
        </Collapsible.Trigger>
        <div className="flex w-full flex-col px-12">
          <h1 className="font-roboto text-xl font-bold text-title">
            Sacola de compras
          </h1>
          <div className="mt-8 flex h-[400px] w-full flex-col gap-6 overflow-auto md:h-full lg:h-[250px] 2xl:h-[520px]">
            <ItemCart />
            <ItemCart />
            <ItemCart />
            <ItemCart />
          </div>
          <footer className="absolute bottom-12 left-12 right-12">
            <div className="flex justify-between">
              <span className="font-roboto text-base font-normal text-text">
                Quantidade
              </span>
              <span className="font-roboto text-lg font-normal text-text">
                3 itens
              </span>
            </div>
            <div className="flex justify-between">
              <strong className="font-roboto text-lg font-bold text-title">
                Valor Total
              </strong>
              <strong className="font-roboto text-2xl font-bold text-title">
                R$ 270,00
              </strong>
            </div>
            <button className="mt-14 w-full items-center rounded-lg bg-principal p-5 font-roboto text-xl font-bold text-white hover:bg-light">
              Finalizar compra
            </button>
          </footer>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
