import {useEffect, useState} from 'react'
import { Button } from 'antd'
import { abort } from 'process'

export default function UseEffectCom() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({name: 'cpp', age: 22})
  // 1. 不传第二个参数，每次数据修改重新渲染的时候，useEffect都会调用传的函数
  // 2. 传入第二个数组包含依赖的数组，useEffect会根据对应依赖的变化来调用函数
  // 3. 当传入[]的时候，只有在第一次组件渲染时会调用函数
  useEffect(() => {
    // console.log(`count: -------${count}`)
    // console.log(`person: --------${person}`)
    let timer = setTimeout(() => {
      console.log(count, '?????')
    }, 4000);
    // const handler = (e) => {
    //   console.log(e)
    // }
    // window.addEventListener('click', handler)
    
    return () => {
      // window.removeEventListener('click', handler)
      // console.log('???', count)
      // console.log(timer, '????')
      // clearTimeout(timer)
    }
  }, [count])
  return (
    <div>
      <Button onClick={() => setCount(count => count+1)}>点击+1</Button>
      <Button onClick={() => setPerson({name: 'cjz', age: 24})}>修改信息</Button>
      {/* <Button onClick={unmount}>卸载</Button> */}
    </div>
  )
}
