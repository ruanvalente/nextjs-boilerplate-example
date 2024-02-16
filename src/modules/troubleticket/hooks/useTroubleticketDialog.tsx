'use client'

import { useState } from 'react'

const useTroubleticketDialog = () => {
  const [openDialog, setCloseDialog] = useState(false)

  function toggleDialog() {
    setCloseDialog((prevState) => !prevState)
  }

  return {
    openDialog,
    toggleDialog,
  }
}

export default useTroubleticketDialog
