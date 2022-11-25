import React, {FC} from 'react'
import { useSelector } from 'react-redux'

type brokerListContainer = {
  children: JSX.Element[]
}



const BrokerListContainer: FC<brokerListContainer> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default BrokerListContainer
