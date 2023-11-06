import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid"
import { format } from "date-fns"
import toast from "react-hot-toast"
import styles from "../styles/modules/modal.module.scss"
import { MdOutlineClose } from "react-icons/md"
import Button from "./Button"
import { addTodo } from "../slices/todoSlice"

const TodoModal = ({ modalOpen, setModalOpen, type }) => {
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("incomplete")
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: format(new Date(), "p, MM/dd/yyyy")
        })
      )
      toast.success("Task Added Successfully")
      setModalOpen(false)
    } else {
      toast.error("Title shouldn't be empty")
    }
  }
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.closeButton} onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button">
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>{type === "update" ? "Update" : "Add"} Task</h1>
            <label htmlFor="title">
              Title
              <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label htmlFor="status">
              Status
              <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "update" ? "Update" : "Add"} Task
              </Button>
              <Button type="button" variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default TodoModal
