export const Count = (props: any) => {
  const { visible, count} = props
  
  return (
    <div style={visible ? {display: 'block', backgroundColor: 'pink'}: {display: 'none'}}>
      <h1>Count</h1>
      <div>
        {count}
      </div>
    </div>
  )
}
