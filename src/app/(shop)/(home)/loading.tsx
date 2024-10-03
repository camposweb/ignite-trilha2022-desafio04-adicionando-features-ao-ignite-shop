import { Skeleton } from '@/app/components/Skeleton'

export default function HomeLoading() {
  return (
    <div className="flex h-full justify-between gap-12 pl-11">
      <div className="">
        <Skeleton className="h-[600px] w-[320px] lg:min-w-[696px]" />
        <div className="mt-6 flex flex-row justify-between">
          <Skeleton className="h-[32px] min-w-[150px] lg:min-w-[330px]" />
          <Skeleton className="h-[32px] min-w-[50px] lg:min-w-[100px]" />
        </div>
      </div>
      <div className="hidden lg:inline">
        <Skeleton className="h-[600px] min-w-[696px]" />
        <div className="mt-6 flex flex-row justify-between">
          <Skeleton className="h-[32px] lg:min-w-[330px]" />
          <Skeleton className="h-[32px] lg:min-w-[100px]" />
        </div>
      </div>
    </div>
  )
}
