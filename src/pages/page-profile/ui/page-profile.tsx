import { selectAllUsers } from '@app/store/reducers/friends/selectors'
import { selectUser } from '@app/store/reducers/profileInfo/selectors'
import { useAppSelector } from '@shared/lib/hooks/store-hooks'
import { type IAllUser } from '@shared/lib/types/api'
import { Banner } from '@shared/ui/banner'
import { InputSendMessage } from '@shared/ui/input-send-message'
import { BlockProfile } from '@widgets/block-profile'
import { BlockProfileMobile } from '@widgets/block-profile-mobile'
import { type FC } from 'react'
import { useParams } from 'react-router-dom'

const PageProfile: FC = () => {
  const user = useAppSelector(selectUser)
  const allUsers = useAppSelector(selectAllUsers)
  const { id } = useParams()
  const currentUser = allUsers.find((item) => item.id === id)
  const isMyProfile = user?.id === id

  const friends = currentUser?.friends
    .map((friendId) => allUsers?.find((item) => item.id === friendId))
    .filter((item) => item !== undefined) as IAllUser[] | undefined

  // Todo Добавить "Страница не найдена" при отсутствии currentUser

  return (
    <div>
      <div className='w-full flex flex-col xl:flex-row-reverse justify-between gap-[20px] lg:gap-[30px] lg:mb-[20px] px-[20px] lg:px-0'>
        <BlockProfile user={currentUser} isMyProfile={isMyProfile} friends={friends} />
        <div className='w-full xxl:w-2/3 rounded-[10px] flex flex-col gap-[20px] xl:gap-[30px]'>
          <Banner
            className='h-[180px] sm:h-[295px] lg:h-[337px]'
            src={currentUser?.banner || null}
          />
          {/* mobile user info */}
          <BlockProfileMobile
            user={currentUser}
            isMyProfile={isMyProfile}
            friends={friends}
          />

          {isMyProfile && (
            <InputSendMessage
              avatar={currentUser?.avatar || null}
              sendMessage={() => {}}
              placeholder='Что у вас нового?'
              className='border-none'
            />
          )}
          {/* <PostNews />
          <PostNews />
          <PostNews /> */}
        </div>
      </div>
    </div>
  )
}
export { PageProfile }
