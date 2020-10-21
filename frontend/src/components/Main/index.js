import React from 'react'

const Main = ({children}) => {
  return (
    <main>
      <h1>Nosso conteúdo principal (main)</h1>
      {children}
    </main>
  )
}

export default Main;