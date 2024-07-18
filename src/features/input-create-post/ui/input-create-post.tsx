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
    await createPost({ text, pictures })
    dispatch(getAllPostsThunk())
  }
  return (
    <InputSendMessage
      user={{ avatar: user?.avatar, userId: user?.id }}
      sendMessage={handleCreatePost}
      placeholder='Что у вас нового?'
      className={cn(className, 'border-none')}
      withPicture
    />
  )
}
export { InputCreatePost }
