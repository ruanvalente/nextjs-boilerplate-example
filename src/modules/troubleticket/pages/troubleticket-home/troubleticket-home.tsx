import dynamic from 'next/dynamic'

import {
  TroubletTicketTableHeading,
  TroubletTicketTableWrapper,
} from '../../styles/styled'

const TroubleticketTable = dynamic(() =>
  import('@/modules/troubleticket/components/troubleticket-table').then(
    (mod) => mod.TroubleticketTable,
  ),
)

export default function TroubleticketHome() {
  return (
    <TroubletTicketTableWrapper>
      <TroubletTicketTableHeading>Chamado Técnico</TroubletTicketTableHeading>
      <TroubleticketTable />
    </TroubletTicketTableWrapper>
  )
}
