import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

import { HttpClient } from '@/services/http/httpClient'
import { PostType } from '../types/post-type'

async function fetchPostData() {
  try {
    const baseURL = process.env.BASE_URL_POST as string
    const httpClient = new HttpClient()
    const response = await httpClient.get<PostType[]>(baseURL)

    const { data, status } = response

    if (status !== 200) {
      console.error('Error fetching data')
    }
    return { props: { data } }
  } catch (error) {
    return { props: { data: [] } }
  }
}

export async function TroubleticketTable() {
  const { props } = await fetchPostData()
  return (
    <DataTable
      value={props.data}
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
