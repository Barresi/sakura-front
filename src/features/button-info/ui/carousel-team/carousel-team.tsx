import { CardTeammate } from '@entities/card-teammate/ui/card-teammate'
import { type ITeammate } from '@shared/lib/types/types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@shared/ui/carousel'
import { useEffect, useState, type FC } from 'react'

interface ICarouselTeamProps {
  className?: string
  team: ITeammate[]
}

const CarouselTeam: FC<ICarouselTeamProps> = ({ className, team }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <Carousel className={`w-full ${className}`} setApi={setApi}>
      <CarouselContent>
        {team.map((teammate, ind) => (
          <CarouselItem key={ind}>
            <CardTeammate {...teammate} isMobile />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className='flex gap-2 justify-center mt-7'>
        {Array(count)
          .fill('1')
          .map((_, ind) => (
            <div
              key={ind}
              className={`w-[10px] h-[10px] rounded-full  ${
                ind + 1 === current ? 'bg-red' : 'bg-cadetBlue'
              }`}
            />
          ))}
      </div>
      {/* 
      <CarouselPrevious />
      <CarouselNext /> 
    */}
    </Carousel>
  )
}
export { CarouselTeam }
