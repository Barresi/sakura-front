import { getAllPostsThunk } from '@app/store/reducers/news/async-thunks'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { likePost } from '@shared/api/news/news'
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type IPost } from '@shared/lib/types/api'
import { ButtonAction } from '@shared/ui/button-action'
import { type FC } from 'react'

interface IButtonLikePostProps {
  className?: string
  post: IPost
}
const ButtonLikePost: FC<IButtonLikePostProps> = ({ className, post }) => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const handleLike = async (): Promise<void> => {
    await likePost(post.id)
    dispatch(getAllPostsThunk())
  }
  return (
    <ButtonAction
      icon='like'
      isActive={!!post?.likedBy.find((item) => item.id === user?.id)}
      className={className}
      onClick={handleLike}
    >
      {post?.likedBy.length || 0}
    </ButtonAction>
  )
}
export { ButtonLikePost }
