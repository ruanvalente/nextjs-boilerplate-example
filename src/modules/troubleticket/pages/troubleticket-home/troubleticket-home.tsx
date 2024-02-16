'use client'

import { TroubleticketTable } from '../../components/troubleticket-table'
import useTroubleticketDialog from '../../hooks/useTroubleticketDialog'
import { Dialog } from '@/shared/components/ui/dialog'
import Card from '@/shared/components/ui/card/card'

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
          className="block w-full max-w-[800px] p-4 my-4 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-orange-400 dark:border-gray-600 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400 focus:orange-400"
        />
        <button onClick={toggleDialog}>
          <i className="text-xl pi pi-sliders-h flex-end"></i>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
        <TroubleticketTable />
        </div>
        {/*<div>*/}
        {/*  <Card.Wrapper>opa</Card.Wrapper>*/}
        {/*</div>*/}
      </div>

      <Dialog onHide={toggleDialog} visible={openDialog} />
    </div>
  )
}
