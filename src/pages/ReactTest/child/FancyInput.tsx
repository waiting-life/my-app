import { forwardRef, useImperativeHandle } from 'react'
function FancyInput(props: any, ref: any) {
  useImperativeHandle(ref, () => ({
    focus: () => {
      ref.current.focus()
    }
  }))
  return <input ref={ref} />
}
export default forwardRef(FancyInput)
