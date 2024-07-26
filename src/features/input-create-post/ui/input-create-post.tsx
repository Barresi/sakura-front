import { getAllPostsThunk } from '@app/store/reducers/news/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { createPost } from '@shared/api/news/news'
import { calculateSizeFiles } from '@shared/lib/calculate-size-files'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { InputSendMessage } from '@shared/ui/input-send-message'
import { toast } from '@widgets/toaster/lib/use-toast'
import { type FC } from 'react'

interface IInputCreatePostProps {
  className?: string
}

const maxMbOfFiles = 2
const maxLengthText = 1000

const InputCreatePost: FC<IInputCreatePostProps> = ({ className }) => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const handleCreatePost = async (text: string, pictures?: FileList): Promise<void> => {
    if (pictures && calculateSizeFiles(pictures) > maxMbOfFiles * 1024 * 1024) {
      toast({
        title: 'Системное уведомление',
        description: `Максимальный размер файлов для загрузки - ${maxMbOfFiles}МБ`
      })
      return
    }
    if (text.length > maxLengthText) {
      toast({
        title: 'Системное уведомление',
        description: `Максимальный размер текста в посте - ${maxLengthText} символов`
      })
      return
    }
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
