export const TsCom = () => {
  const person = {
    name: 'cpp'
  }
  // console.log(typeof person, '?????')

  let p1 = {
    name: 'cpp',
    age: 22
  }
  let p2: keyof typeof p1
  let p3: typeof p2 = 'name'
  return (
    <div>
      <h1>ts</h1>

    </div>
  )
}
