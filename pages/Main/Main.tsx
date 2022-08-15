import React, { ReactComponentElement, ReactElement } from "react";

interface props {
  children: ReactElement
}

function Main({children}: props) {
  return (
    <>
      <header>
        <h1>Meu Portfolio</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <h1>footer do portfolio</h1>
      </footer>
    </>
  )
}

export default Main;
