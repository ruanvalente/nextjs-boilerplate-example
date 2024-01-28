import dynamic from 'next/dynamic'

import { HttpClient } from '@/services/http/httpClient'

import {
  TroubletTicketTableHeading,
  TroubletTicketTableWrapper,
} from '../../styles/styled'

import { PostType } from '@/modules/troubleticket/types/post-type'

const TroubleticketTable = dynamic(() =>
  import('@/modules/troubleticket/components/troubleticket-table').then(
    (mod) => mod.TroubleticketTable,
  ),
)
const fetchData = async (): Promise<PostType[] | undefined> => {
  try {
    const baseURL = process.env.BASE_URL_POST as string
    const httpClient = new HttpClient()
    const response = await httpClient.get<PostType[]>(baseURL)
    const { data, status } = response

    if (status !== 200) {
      console.error('error fetching')
    }
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function TroubleticketHome() {
  const postData = await fetchData()

  return (
    <TroubletTicketTableWrapper>
      <TroubletTicketTableHeading>Chamado Técnico</TroubletTicketTableHeading>
      <TroubleticketTable data={postData} />
    </TroubletTicketTableWrapper>
  )
}
