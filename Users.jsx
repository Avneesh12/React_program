
// Functional Component


// const Users = () =>{
//     return(
//         <>
//             <h1>This is User Component</h1>
//         </>
//     )
// }

// const Emp = () =>{
//     return(
//         <>
//             <h1>This is Emplayee Component</h1>
//         </>
//     )
// }

// export default Users;
// export {Emp};



// Class Component

// import React,{Component} from "react";

// class Users extends Component{
//     render(){
//         return(
//             <>
//                 <h1>This is Users Class Component</h1>
//             </>

//         )
//     }
// }

// class Emp extends Component{
//     render(){
//         return(
//             <>
//                 <h1>This is Employee Class Component</h1>
//             </>
//         )
//     }
// }

// export default Users

// export {Emp}




// React STate


// import { useState } from "react";

// const Users = () => {
//     const [data,setData] = useState(0);
//     const incFun = () => {
//         setData(data+1)

//     }
//     const decFun = ()=>{
//         if (data === 0){
//             setData(0)
//         }
//         else{
//             setData(data-1)
//         }
//     }
//     return (
//         <>
//             <h1>This is State</h1>
//             <h1>Your Value Is {data} </h1>
//             <button onClick={incFun}>Increase</button>
//             <button onClick={decFun}>Decrease</button>
//         </>
//     )
// }

// export default Users;


//React State Class Component

// import React , {Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         this.state = {data:1}
//     }
//     inc(){
//         this.setState({data:this.state.data + 1})
//     }
//     dec(){
//         if (this.state.data === 0){
//             this.setState({data:0})
//         }
//         else{
//             this.setState({data:this.state.data -1})
//         }
        
//     }
    
//     render(){
//         return(
//             <>
//                 <h1>THis is Class Component for State</h1>
//                 <h1>Value is {this.state.data}</h1>
//                 <button onClick={()=>{this.dec()}}>Dec Value</button>
//                 <button onClick={()=>{this.inc()}}>Inc Value</button>
//             </>
//         )
//     }
// }

// export default Users;


// Props 

// const Users = (props) =>{
//     return(
//         <>
//             <h1>THis is Props Example</h1>
//             <h2>Name: {props.name} </h2>
//             <h2>Email : {props.email}</h2>
//         </>
//     )
// }

// export default Users




// props using class

// import React,{Component} from "react";

// class Users extends Component{
//     render(){
//         console.log(this.props)
//         return(
//             <>
//                 <h1>Class Props</h1>
//                 <h2>Name: {this.props.name}</h2>
//                 <h2>Email : {this.props.email}</h2>
//             </>
//         )
//     }
// }

// export default Users;



import React , {useState} from "react"

const Users = () =>{
    const [data,setData] = useState("")
    const getData = (val) =>{
        setData(val.target.value)
        console.log(val.target.value)
    }
    return(
        <>
            <h1>Get Value From User</h1>
            <h1>Your Data Is: {data}</h1>
            <input type="text" onChange={getData}></input>
        </>
    )
}

export default Users;









