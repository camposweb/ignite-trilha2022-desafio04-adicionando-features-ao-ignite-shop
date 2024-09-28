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
      perView: 2,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 24,
        },
      },
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider pl-11">
      {children}
    </div>
  )
}
