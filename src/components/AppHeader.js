import React, { useState } from "react"
import Button, { SelectButton } from "./Button"
import styles from "../styles/modules/app.module.scss"
import TodoModal from "./TodoModal"

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} type="add" />
    </div>
  )
}

export default AppHeader
