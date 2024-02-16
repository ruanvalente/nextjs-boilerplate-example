import {
  Dialog as PrimeDialog,
  DialogProps as PrimeDialogProps,
} from 'primereact/dialog'

type DialogProps = {} & PrimeDialogProps

export function Dialog({ visible, onHide, ...props }: DialogProps) {
  return (
    <PrimeDialog
      header="Header"
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onHide}
      {...props}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </PrimeDialog>
  )
}