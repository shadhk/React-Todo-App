import React from "react"
import style from "../styles/modules/title.module.scss"

const PageTitle = ({ children, ...rest }) => {
  return (
    <div>
      <p className={style.title}>{children}</p>
    </div>
  )
}

export default PageTitle
