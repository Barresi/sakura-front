import { removeNullProperties } from '@shared/lib/remove-null-properties'

type argObject = Record<string, any>

export const removeNullPropertiesInUserInfo = (
  obj: argObject,
  gender: 'male' | 'female' | null,
  birthDate: Date | null
): argObject => {
  const payloadWithoutNullProperties = removeNullProperties(obj)
  if (payloadWithoutNullProperties.gender === gender) delete obj.gender
  if (new Date(payloadWithoutNullProperties.birthDate).getTime() === birthDate?.getTime())
    delete obj.birthDate
  return payloadWithoutNullProperties
}
