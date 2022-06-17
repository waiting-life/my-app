import { useRef } from "react"
export default function UseRefCom() {
  const ref = useRef<HTMLDivElement>(null!)
  return (
    <div ref={ref} onClick={() => console.log(ref.current.innerText)}>
      点击
    </div>
  )
}
