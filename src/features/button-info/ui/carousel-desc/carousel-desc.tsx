import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@shared/ui/carousel'
import { useEffect, useState, type FC } from 'react'

interface ICarouselDescProps {
  className?: string
}
const CarouselDesc: FC<ICarouselDescProps> = ({ className }) => {
  const carouselItemClassName =
    'px-[5px] py-[15px] rounded-[10px] border-2 border-redHover h-full'

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
        <CarouselItem>
          <div className={carouselItemClassName}>
            Добро пожаловать в мир «Sakura» – уникального социального проекта, где каждый
            пользователь становится не просто участником, а настоящим самураем,
            исследующим долгий и увлекательный путь к своей цели. Мы гордимся представить
            нашу социальную сеть, построенную на японской тематике, где каждый член нашей
            обширной семьи имеет возможность поделиться своими историями, планами и
            предоставлять поддержку другим воинам, проходящим через аналогичные испытания.
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className={carouselItemClassName}>
            «Sakura» – это не просто социальная сеть, это общество единомышленников,
            объединенных стремлением к самосовершенствованию и достижению поставленных
            целей. У нас каждый может найти своего союзника, готового поддержать в сложные
            моменты, реализовывать совместные проекты и совершенствовать свои навыки.
          </div>
        </CarouselItem>
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
export { CarouselDesc }
