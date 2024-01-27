import AppointmentEdit from '@/modules/appointment/pages/appointment-edit/appointment-edit'

export default function AppointmentWithIdPage({
  params,
}: {
  params: { id: string }
}) {
  return <AppointmentEdit params={params} />
}
