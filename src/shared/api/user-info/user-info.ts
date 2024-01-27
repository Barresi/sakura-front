import {
  type IEditUserInfoResponse,
  type IEditUserSecurityInfoResponse,
  type IGetUserInfoResponse
} from '@shared/lib/types/api'
import {
  type IEditUserInfoForm,
  type IEditUserSecurityInfoForm
} from '@shared/lib/types/forms'
import { apiWithAuth } from '../api'

export const getUserInfo = async (): Promise<IGetUserInfoResponse> => {
  const res = await apiWithAuth.get<IGetUserInfoResponse>('/auth/userInfo')

  return res.data
}

export const editUserInfo = async (
  form: IEditUserInfoForm
): Promise<IEditUserInfoResponse> => {
  const res = await apiWithAuth.patch<IEditUserInfoResponse>('/auth/account', form)

  return res.data
}

export const editUserSecurityInfo = async (
  form: IEditUserSecurityInfoForm
): Promise<IEditUserSecurityInfoResponse> => {
  const res = await apiWithAuth.patch<IEditUserSecurityInfoResponse>(
    '/auth/security',
    form
  )

  return res.data
}
