import React from 'react'

import { useMessageState } from 'use-message-state'
import 'use-message-state/dist/index.css'

const A = () => {
  const [firstname, setFirstname] = useMessageState('firstname', 'joe')
  const [lastname, setLastname] = useMessageState('lastname', 'lavabo')

  return (
    <div>
      <div>
        Firstname :{' '}
        <input
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value)
          }}
        />
      </div>

      <div>
        Lastname :{' '}
        <input
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

const B = () => {
  const [firstname] = useMessageState('firstname', 'joe')
  const [lastname] = useMessageState('lastname', 'lavabo')

  return (
    <div>
      <div>Firstname : {firstname}</div>
      <div>Lastname: {lastname}</div>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <div>
        <A />

        <hr style={{ margin: '20px 0' }} />

        <B />
      </div>
    </div>
  )
}

export default App
