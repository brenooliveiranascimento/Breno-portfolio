import React, { ReactComponentElement, ReactElement } from "react";

interface props {
  children: ReactElement
}

function Main({children}: props) {
  return (
    <div>
        {children}
      <footer>
        <h1>footer do portfolio</h1>
      </footer>
    </div>
  )
}

export default Main;
