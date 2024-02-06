import dynamic from 'next/dynamic'

import {
  TroubletTicketTableHeading,
  TroubletTicketTableWrapper,
} from '../../styles/styled'
import Card from '@/shared/components/ui/card/card'

const TroubleticketTable = dynamic(() =>
  import('@/modules/troubleticket/components/troubleticket-table').then(
    (mod) => mod.TroubleticketTable,
  ),
)

export default function TroubleticketHome() {
  return (
    <>
      <TroubletTicketTableHeading>Chamado Técnico</TroubletTicketTableHeading>
      <TroubletTicketTableWrapper>
        <Card.Wrapper>
          <Card.Content>
            <TroubleticketTable />
          </Card.Content>
        </Card.Wrapper>
        <Card.Wrapper>
          <Card.Content>
            <Card.ActionWrapper>
              <Card.Typography as="h6">Card title</Card.Typography>
              <Card.ActionButton rounded variant="outline">
                <i className="pi pi-replay"></i>
              </Card.ActionButton>
              <Card.ActionButton rounded variant="outline">
                <i className="pi pi-trash"></i>
              </Card.ActionButton>
            </Card.ActionWrapper>
            <Card.Typography as="p">Card paragraph</Card.Typography>
          </Card.Content>
        </Card.Wrapper>
      </TroubletTicketTableWrapper>
    </>
  )
}
