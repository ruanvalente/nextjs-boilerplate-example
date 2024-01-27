export default function AppointmentEdit({
  params,
}: {
  params: { id: string }
}) {
  return <h1>Appointment edit page {params.id}</h1>
}
