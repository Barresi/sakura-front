import { useState, type FC } from 'react'

interface IShowFullTextProps {
  text: string | undefined | null
  maxLength?: number
  className?: string
}
const ShowFullText: FC<IShowFullTextProps> = ({ className, maxLength = 200, text }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = (): void => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className={className}>
      {isExpanded ? (
        <div>
          {text + ' '}
          <button onClick={toggleExpand} className='text-twitter'>
            Скрыть
          </button>
        </div>
      ) : (
        <div>
          {text?.slice(0, maxLength)}
          {text?.length ? text.length > maxLength && '... ' : null}
          {text?.length
            ? text.length > maxLength && (
                <button onClick={toggleExpand} className='text-twitter'>
                  Показать полностью
                </button>
              )
            : null}
        </div>
      )}
    </div>
  )
}
export { ShowFullText }
