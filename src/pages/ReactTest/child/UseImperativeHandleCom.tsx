import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Button, Input } from 'antd'
// import FancyInput from './FancyInput'

export default function UseImperativeHandleCom() {
  const inputRef = useRef<any>(null)
  const inputRef1 = useRef<any>(null)
  const inputRef2 = useRef<any>(null)

  const handleFocus = () => {
    console.log(inputRef) // {current: null}
  }
  const handleFocusRef = () => {
    console.log(inputRef1)
    inputRef1.current?.focus();
  }
  const handleFocusRef2 = () => {
    inputRef2.current.focus()
  }
  return (
    <div>
      {/* <FancyInput ref={inputRef} /> */}
      <FancyInput1 ref={inputRef1} />
      <FancyInput2 ref={inputRef2}/>
      
      {/* <Button onClick={handleFocus}>组件未结合forwardRef，点击focus</Button> 没有结合forwardRef会警告 */}
      <Button onClick={handleFocusRef}>结合forwardRef，点击focus</Button>
      <Button onClick={handleFocusRef2}>结合forwardRef，搭配useImpreativeHandle点击focus</Button>
    </div>
  )
}


// const FancyInput =(props: any) => {
//   return <input  />
// }


const FancyInput1 = forwardRef((props, ref: any) => {
  return <input ref={ref} />
})

const FancyInput2 = forwardRef((props: any, ref: any) => {
  const inputRef = useRef<any>(null)
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} />
})
