import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../hooks/use-stores";
export const Counter = observer(() => {
    const { counterStore } = useStores()
  
    return (
      <>
        <div>{counterStore.count}</div>
        <button onClick={() => counterStore.increment()}>++</button>
        <button onClick={() => counterStore.decrement()}>--</button>
      </>
    )
  })