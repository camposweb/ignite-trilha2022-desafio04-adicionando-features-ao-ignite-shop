import { Handbag } from '@phosphor-icons/react/dist/ssr'

export function Cart() {
  return (
    <div className="relative">
      <button className="items-center rounded-md bg-elements p-2">
        <Handbag className="h-6 w-6 text-icon" />
        <div className="absolute right-[-10px] top-[-8px] h-6 w-6 items-center rounded-full bg-background">
          <span className="h-6 w-6 rounded-full bg-principal text-sm font-bold text-white">
            1
          </span>
        </div>
      </button>
    </div>
  )
}
