
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { topla, cikar } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Topla"
          onClick={() => dispatch(topla())}
        >
          Topla
        </button>
        <span>{count}</span>
        <button
          aria-label="Çıkar"
          onClick={() => dispatch(cikar())}
        >
          Çıkar
        </button>
      </div>
    </div>
  )
}

