import React, {MouseEvent, ChangeEvent} from "react"


export const User = () => {

    const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget)
       // alert('user should be deleted')
    };

    const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed ${e.currentTarget.value}`);
        
    };

    const onNameChanged = () => {
        console.log("name changed");
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return (
        <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Artem</textarea> 
        <input onChange={onAgeChanged} type = {"number"} />
        <button onClick={deleteUser}>delete</button>

        </div>
    )
}