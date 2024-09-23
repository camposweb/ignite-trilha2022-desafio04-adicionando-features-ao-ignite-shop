import { Handbag } from '@phosphor-icons/react/dist/ssr'

export function Cart() {
  return (
    <div className="relative">
      <button className="items-center rounded-md p-2 bg-elements">
        <Handbag className="w-6 h-6 text-icon" />
        <div className="absolute top-[-8px] right-[-10px] w-6 h-6 bg-background rounded-full items-center">
          <span className="bg-principal rounded-full w-6 h-6 text-white text-sm font-bold">
            1
          </span>
        </div>
      </button>
    </div>
  )
}
