import React, { Component } from "react";
import './global.css'

export default function Página_Apresentação({children}: {children: React.ReactNode}){
  return(
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}