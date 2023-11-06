import React from "react"
import PageTitle from "./components/PageTitle"
import styles from "./styles/modules/app.module.scss"
import AppHeader from "./components/AppHeader"
import { Toaster } from "react-hot-toast"
import AppContent from "./components/AppContent"

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LISTS</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem"
          }
        }}
      />
    </>
  )
}

export default App
