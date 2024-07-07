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
  const handleCreatePost = async (text: string): Promise<void> => {
    console.log(text)
    await createPost({ text })
    dispatch(getAllPostsThunk())
  }
  return (
    <InputSendMessage
      avatar={user?.avatar}
      sendMessage={handleCreatePost}
      placeholder='Что у вас нового?'
      className={cn(className, 'border-none')}
      pictures={[
        'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?w=826&t=st=1720272228~exp=1720272828~hmac=fa260c3456e9ef3af4a7057d54d95d78657979f2829a19f2833ccb75f823864e',
        'https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?w=826&t=st=1720272228~exp=1720272828~hmac=fa260c3456e9ef3af4a7057d54d95d78657979f2829a19f2833ccb75f823864e'
      ]}
    />
  )
}
export { InputCreatePost }
