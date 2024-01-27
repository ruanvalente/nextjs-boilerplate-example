import { PostType } from '@/modules/troubleticket/types/post-type'
import { TroubleticketTable } from '../../components/troubleticket-table'

import {
  TroubletTicketTableWrapper,
  TroubletTicketTableHeading,
} from '../../styles/styled'

const fetchData = async (): Promise<PostType[] | undefined> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData: PostType[] = await response.json()

    if (!postData) {
      console.error('error fetching')
    }
    return postData
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
