import { forwardRef, useImperativeHandle, useRef } from 'react'
function FancyInput(props: any, ref: any) {
  const inputRef = useRef<any>(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} />
}
export default forwardRef(FancyInput)
