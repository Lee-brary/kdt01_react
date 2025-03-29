import React from 'react'

export default function Practice({id, refSel, ops, onChangeHandle}) {
  return (
    <select id={id}
            ref={refSel}
            onChange={onChangeHandle}
            className=''>
                {
                    ops.map(item => <option key={item} value={item}>{item}</option>)
                }


    </select>
  )
}
