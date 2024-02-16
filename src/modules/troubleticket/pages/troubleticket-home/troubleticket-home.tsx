'use client'

import { Dialog } from '@/shared/components/ui/dialog'
import dynamic from 'next/dynamic'
import useTroubleticketDialog from '../../hooks/useTroubleticketDialog'
import { TroubletTicketTableWrapper } from '../../styles/styled'
import Card from '@/shared/components/ui/card/card'

const TroubleticketTable = dynamic(
  () =>
    import('@/modules/troubleticket/components/troubleticket-table').then(
      (mod) => mod.TroubleticketTable,
    ),
  { ssr: false },
)

export default function TroubleticketHome() {
  const { openDialog, toggleDialog } = useTroubleticketDialog()
  return (
    <div className="w-full">
      <h1 className="my-4 text-3xl font-bold">Chamados Técnico</h1>
      <div className="flex gap-2">
        <input
          type="text"
          id="large-input"
          placeholder="Pesquisar por ID"
          className="block w-[770px] p-4 my-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400"
        />
        <button onClick={toggleDialog}>
          <i className="text-xl pi pi-sliders-h flex-end"></i>
        </button>
      </div>
      <TroubletTicketTableWrapper>
        <TroubleticketTable />
        {/* <Card.Wrapper>
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
        </Card.Wrapper> */}
        <Dialog visible={openDialog} onHide={toggleDialog} />
      </TroubletTicketTableWrapper>
    </div>
  )
}
