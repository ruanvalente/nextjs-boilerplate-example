'use client'

import { useEffect, useState } from 'react'
import { HttpClient } from '@/services/http/httpClient'
import { Column as PrimeColumn } from 'primereact/column'
import { DataTable as PrimeDataTable } from 'primereact/datatable'
import { Skeleton as PrimeSkeleton } from 'primereact/skeleton'
import { PostType } from '../types/post-type'

type TroubleticketSkeletonProps = {
  id: string
  title: string
  body: string
}

export function TroubleticketTable() {
  const [data, setData] = useState<PostType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading((prevLoadingState) => !prevLoadingState)
      try {
        const baseURL = 'https://jsonplaceholder.typicode.com/posts'
        const httpClient = new HttpClient()
        const response = await httpClient.get<PostType[]>(baseURL)
        const { data, status } = response

        if (status !== 200) {
          console.error('Error fetching data')
          setData([])
          setLoading((prevLoadingState) => !prevLoadingState)
        }
        setData(data)
      } catch (error) {
        console.error(error)
        setData([])
        setLoading((prevLoadingState) => !prevLoadingState)
      } finally {
        setLoading((prevLoadingState) => !prevLoadingState)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    const items: TroubleticketSkeletonProps[] = Array.from(
      { length: 10 },
      (v, i) => ({
        id: '',
        body: '',
        title: '',
      }),
    )

    return (
      <PrimeDataTable value={items} className="p-datatable-striped">
        <PrimeColumn
          field="id"
          header="ID"
          style={{ width: '25%' }}
          body={<PrimeSkeleton />}
        ></PrimeColumn>
        <PrimeColumn
          field="title"
          header="Title"
          style={{ width: '25%' }}
          body={<PrimeSkeleton />}
        ></PrimeColumn>
        <PrimeColumn
          field="body"
          header="Body"
          style={{ width: '25%' }}
          body={<PrimeSkeleton />}
        ></PrimeColumn>
      </PrimeDataTable>
    )
  }

  return (
    <PrimeDataTable
      value={data}
      paginator
      rows={10}
      showGridlines
      stripedRows
      rowsPerPageOptions={[10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
      loading={loading}
    >
      <PrimeColumn field="id" header="ID" sortable></PrimeColumn>
      <PrimeColumn field="title" header="Title" sortable></PrimeColumn>
      <PrimeColumn field="body" header="Body" sortable></PrimeColumn>
    </PrimeDataTable>
  )
}
