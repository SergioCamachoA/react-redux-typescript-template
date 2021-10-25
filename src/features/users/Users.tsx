import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { add, selectUsers, User } from "./usersSlice"

export const Users = () => {
  const users = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()

  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(!visible)
  }

  const [newUser, setNewUser] = useState<User>({ name: "", surname: "" })

  const handleNewUSer = () => {
    if (newUser.name.length > 0 && newUser.surname.length > 0) {
      dispatch(add(newUser))
      setNewUser({ name: "", surname: "" })
    }
  }

  const handleInput = (e: string, inputType: string) => {
    inputType === "name"
      ? setNewUser({
          name: e,
          surname: newUser ? newUser.surname : "",
        })
      : setNewUser({
          name: newUser ? newUser.name : "",
          surname: e,
        })
  }

  return (
    <div>
      <div>
        <input
          value={newUser.name}
          onChange={(e) => handleInput(e.target.value, "name")}
          type="text"
          placeholder="first name"
        />
        <input
          value={newUser.surname}
          onChange={(e) => handleInput(e.target.value, "surname")}
          type="text"
          placeholder="last name"
        />
        <button onClick={() => handleNewUSer()}>ADD</button>
      </div>

      <button onClick={handleClick}>Show users</button>

      <ul>
        {visible &&
          users.map((user, index) => {
            return (
              <div key={index}>
                <p>{user.name}</p>
                <p>{user.surname}</p>
              </div>
            )
          })}
      </ul>
    </div>
  )
}
