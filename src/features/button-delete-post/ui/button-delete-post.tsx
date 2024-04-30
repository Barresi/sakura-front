import { getAllPostsThunk } from '@app/store/reducers/news/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { deletePost } from '@shared/api/news/news'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { cn } from '@shared/lib/merge-classes'
import { type IPost } from '@shared/lib/types/api'
import { Button } from '@shared/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@shared/ui/dropdown-menu'
import { type FC } from 'react'

interface IButtonDeletePostProps {
  post: IPost
  className?: string
}
const ButtonDeletePost: FC<IButtonDeletePostProps> = ({ className, post }) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const handleDeletePost = async (): Promise<void> => {
    await deletePost(post.id)
    dispatch(getAllPostsThunk())
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant='text' icon='more' className={cn(className, 'p-0')} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Действия</DropdownMenuLabel>
        {post.createdById === user?.id && (
          <DropdownMenuItem onClick={handleDeletePost} className='cursor-pointer'>
            Удалить пост
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export { ButtonDeletePost }
