'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ReactNode } from 'react'

interface ProductContainerProps {
  children: ReactNode
}

export function ProductContainer({ children }: ProductContainerProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  )
}
