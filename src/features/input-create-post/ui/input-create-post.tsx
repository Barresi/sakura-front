import { getAllPostsThunk } from '@app/store/reducers/news/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { createPost } from '@shared/api/news/news'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { InputSendMessage } from '@shared/ui/input-send-message'
import { type FC } from 'react'

interface IInputCreatePostProps {
  className?: string
}
const InputCreatePost: FC<IInputCreatePostProps> = ({ className }) => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const handleCreatePost = async (text: string, pictures?: FileList): Promise<void> => {
    const formData = new FormData()
    formData.append(`text`, text)
    if (pictures)
      Array.from(pictures).forEach((file, index) => {
        formData.append(`file${index}`, file)
      })

    await createPost(formData)
    dispatch(getAllPostsThunk())
  }
  return (
    <InputSendMessage
      avatar={user?.avatar}
      sendMessage={handleCreatePost}
      placeholder='Что у вас нового?'
      className={cn(className, 'border-none')}
      withPicture
    />
  )
}
export { InputCreatePost }
