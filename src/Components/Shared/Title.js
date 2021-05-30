import React from 'react'

function Title({data}) {
  const style = {
    backgroundColor:data.bg?data.bg:'#0080ff31',
    boxShadow:data.shadow?data.shadow:'0px 0px 10px 0px white',
    border:data.border?data.border:'none',
    borderColor: 'transparent',
    fontWeight:'bold',
    padding:'5px'
  }
  return (
    <div>
      <h1 style={style}>{data.title}</h1>
    </div>
  )
}

export default Title;
