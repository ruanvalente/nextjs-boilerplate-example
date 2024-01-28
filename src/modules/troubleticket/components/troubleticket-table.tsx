import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

import { TroubleTicketType } from '../types/troubleticket-table-type'

export function TroubleticketTable({ data }: TroubleTicketType) {
  return (
    <DataTable
      value={data}
      paginator
      rows={10}
      showGridlines={true}
      rowsPerPageOptions={[10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
    >
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
      <Column field="body" header="Body"></Column>
    </DataTable>
  )
}
