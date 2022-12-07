
import React, {useState} from 'react'

const App = () => {
    const [item,setItem] = useState("")
    const [itemList,getItem] = useState([])

    const submitData = () =>{
        getItem((items)=>{return [...items,item]})
        setItem("")
    }

    const delItem = (id) =>{
        getItem((olditem)=>{
            return olditem.filter((items,index)=>{
                return index !== id
            })
        })
    }
    return (
        <>
            <h1>ToDo list</h1>
            <input type="text" placeholder='Add Item' value={item} onChange={(e)=>{setItem(e.target.value)}} />
            <button onClick={submitData}>+</button>
            <ol>
                {itemList.map((val,id)=>{return <li key={id}>{val} <button onClick={()=>delItem(id)}>x</button></li>})}
            </ol>
        </>
    )
}

export default App
