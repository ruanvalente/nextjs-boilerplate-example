'use client'

import { useEffect, useState } from 'react'
import { HttpClient } from '@/services/http/httpClient'

import { Column as PrimeColumn } from 'primereact/column'
import { DataTable as PrimeDataTable } from 'primereact/datatable'
import { Skeleton as PrimeSkeleton } from 'primereact/skeleton'

import { PostType } from '../types/post-type'

type DataTableTypeProps = {
  id: string
  title: string
  body: string
}

export function TroubleticketTable() {
  const [troubleticketData, setTroubleticketData] = useState<PostType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchTroubleticketData = async () => {
      try {
        setLoading((prevState) => !prevState)
        const baseURL = 'https://jsonplaceholder.typicode.com/posts'
        const httpClient = new HttpClient()
        const response = await httpClient.get<PostType[]>(baseURL)
        const { data, status } = response

        if (status !== 200) {
          console.error('Error fetching data')
          setLoading((prevState) => !prevState)
        }
        setTroubleticketData(data)
      } catch (error) {
        setLoading((prevState) => !prevState)
      } finally {
        setLoading((prevState) => !prevState)
      }
    }
    fetchTroubleticketData()
  }, [])

  if (loading) {
    const items: DataTableTypeProps[] = Array.from({ length: 5 }, (v, i) => ({
      id: '',
      title: '',
      body: '',
    }))
    return (
      <PrimeDataTable value={items} className="w-full p-datatable-striped">
        <PrimeColumn
          field="id"
          header="ID"
          sortable
          body={<PrimeSkeleton />}
        ></PrimeColumn>
        <PrimeColumn
          field="title"
          header="Title"
          sortable
          body={<PrimeSkeleton />}
        ></PrimeColumn>
        <PrimeColumn
          field="body"
          header="Body"
          sortable
          body={<PrimeSkeleton />}
        ></PrimeColumn>
      </PrimeDataTable>
    )
  }
  return (
    <PrimeDataTable
      value={troubleticketData}
      paginator
      rows={10}
      showGridlines
      stripedRows
      rowsPerPageOptions={[10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
    >
      <PrimeColumn field="id" header="ID" sortable></PrimeColumn>
      <PrimeColumn field="title" header="Title" sortable></PrimeColumn>
      <PrimeColumn field="body" header="Body" sortable></PrimeColumn>
    </PrimeDataTable>
  )
}
