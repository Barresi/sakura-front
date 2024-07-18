import { selectAllUsers, selectFriends } from '@app/store/reducers/friends/selectors'
import { selectAllPosts } from '@app/store/reducers/news/selectors'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { PostNews } from '@entities/post-news'
import { ButtonDeletePost } from '@features/button-delete-post'
import { ButtonLikePost } from '@features/button-like-post'
import { InputCreatePost } from '@features/input-create-post'
import { markWatchedPost } from '@shared/api/news/news'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type IAllUser } from '@shared/lib/types/api'
import { type IUser } from '@shared/lib/types/types'
import { Banner } from '@shared/ui/banner'
import { BlockProfile } from '@widgets/block-profile'
import { BlockProfileMobile } from '@widgets/block-profile-mobile'
import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom'

const PageProfile: FC = () => {
  const posts = useAppSelector(selectAllPosts)
  const user = useAppSelector(selectUser)
  const userFriends = useAppSelector(selectFriends)
  const allUsers = useAppSelector(selectAllUsers)
  const { id } = useParams()
  const isMyProfile = user?.id === id

  // Разная логика в зависимости от текущей страницы
  const currentUser = (isMyProfile ? user : allUsers.find((item) => item.id === id)) as
    | IUser
    | IAllUser
    | undefined
  const currentUserFriends: string[] | undefined = isMyProfile
    ? userFriends.map((friend) =>
        friend.fromId === user?.id ? friend.toId : friend.fromId
      )
    : allUsers.find((item) => item.id === currentUser?.id)?.friends

  // Поиск айди в массиве всех пользователей
  const friends: IAllUser[] | undefined = currentUserFriends
    ? currentUserFriends
        .map((friendId) => allUsers?.find((item) => item.id === friendId))
        .filter((item) => item !== undefined)
    : []

  // Todo Добавить "Страница не найдена" при отсутствии currentUser

  const currentUserPosts = posts.filter((post) => post.createdById === currentUser?.id)

  useEffect(() => {
    const notWatchedPostIds = currentUserPosts
      .filter((post) => !post.watchedBy.find((id) => id === user?.id))
      .map((post) => post.id)
    if (notWatchedPostIds.length) markWatchedPost(notWatchedPostIds)
  }, [])

  return (
    <div>
      <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
        <BlockProfile user={currentUser} isMyProfile={isMyProfile} friends={friends} />
        <div className='w-full xxl:w-2/3 rounded-[10px] flex flex-col gap-[20px] xl:gap-[30px]'>
          <Banner
            className='h-[180px] sm:h-[295px] lg:h-[337px]'
            src={currentUser?.banner || null}
            userId={currentUser?.id}
          />
          {/* mobile user info */}
          <BlockProfileMobile
            user={currentUser}
            isMyProfile={isMyProfile}
            friends={friends}
          />

          {isMyProfile && <InputCreatePost />}
          {currentUserPosts.map((post, ind) => (
            <PostNews
              post={post}
              key={ind}
              buttonLike={<ButtonLikePost post={post} />}
              buttonDelete={<ButtonDeletePost post={post} />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export { PageProfile }
