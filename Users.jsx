
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



// import React , {useState} from "react"

// const Users = () =>{
//     const [data,setData] = useState("")
//     const [mydata,showMydata] = useState(false)
//     const getData = (val) =>{
//         setData(val.target.value)
//         console.log(val.target.value)
//     }

//     return(
//         <>
//             <h1>Get Value From User</h1>
//             <h1>Your Data Is: {mydata ? data : ""}</h1>
//             <input type="text" onChange={getData}></input>
//             <button onClick={()=>{showMydata(true)}}>Get Data</button>
//         </>
//     )
// }

// export default Users;




// Hide and show Element 

// import React , {useState} from "react"

// const Users = () =>{
//     const [data,setData] = useState(false)
//     return(
//         <>
//             <h1>THis is Hide , Show and Toogle Program</h1>
//             <h1>{data ? "Click For Hide and Show " : ""}</h1>
//             <button onClick={()=>{setData(true)}}>show data</button>
//             <button onClick={()=>{setData(false)}}>hide data</button>
//             <button onClick={()=>{setData(!data)}}>toggle data</button>
//         </>
//     )
// }

// export default Users;




// get Form Data

// import React, {useState} from "react"

// const Users = () =>{
//     const [name,setName] = useState("")
//     const [opt,setOpt] = useState("")
//     const [sure,setSure] = useState(false)
//     const getData = (e) =>{
//         e.preventDefault()
//         console.log(name,opt,sure)
//     }
//     // const getName = (e) =>{
//     //     console.log(e.target.value)
//     // }
//     return(
//         <>
//             <h1>Get Form Data</h1>
//             <form onSubmit={getData}>
//                 <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}></input><br/><br/>
//                 <select onChange={(e)=>{setOpt(e.target.value)}}>
//                     <option>select option</option>
//                     <option>Python</option>
//                     <option>React Js</option>
//                     <option>Css</option>
//                 </select><br/><br/>
//                 <input type="checkbox" onChange={(e)=>{setSure(e.target.value)}}></input><span>Are You Sure ?</span><br/><br/>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// export default Users;




// Conditional Rendering

// import React , {useState} from "react";

// const Users = () =>{
//     // const [user,setUser] = useState(false)
//     const [user,setUser] = useState(1)  
//     return(
//         <>
//             <h1>This is Conditional Rendering</h1>
//             {user === 1 ? <h1>Hello User 1</h1> 
//             : user === 2 ?  <h1>Hello User 2</h1> 
//             :<h1>Hello Guest</h1> }
//         </>
//     )
// }

// export default Users;


// Pass Function as Props

// import ChildUser from "./ChildUser";

// const Users = (props) =>{
//     return(
//         <>
//             <h1>Function as a Props</h1>
//             <ChildUser childdata = {props.data} />
//             <button onClick={props.data}>Click Here</button>
//         </>
//     )
// }

// export default Users;




// React Lifecycle

// 1. Mounting
// 2. Updating
// 3. Unmounting


// 1. Mounting

// ** constructor

// import React , {Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         this.state = {data:"This is Constructor life cycle"}
//     }
//     render(){
//         return(
//             <>
//                 <h1>This is Lifecycle Methods</h1>
//                 <h2>{this.state.data}</h2>
//             </>
//         )
//     }
// }

// export default Users;




// ** render method  => Render method always call ewhen any component(props,state) is Updated or Initially rendering the page


// import React , {Component} from "react";

// class Users extends Component{
//     render(){
//         return(
//             <>
//                 <h1>This is Render Method of Life Cycle</h1>
//             </>
//         )
//     }
// }


// export default Users;



// ** componentDidMount => call after component is renderd and it does not effected by state and props


// import React , {Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         console.log("This is Constructor")
//         this.state = {data:"Avneesh"}
//     }
//     componentDidMount(){
//         console.log("This is componentDidMount")
//     }
//     render(){
//         console.log("this is render")
//         return(
//             <>
//                 <h1>This is  Lifecycle data is : {this.state.data}</h1>
//                 <button onClick={()=>{this.setState({data:"Shivani"})}}>click here</button>
//             </>
//         )
//     }
// }


// export default Users;




// 2. Updating

// ** componentDidUpdate => Executes after component Updation

// import React, {Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         this.state = {data:"Avneesh"}
//     }
//     componentDidMount(){
//         console.log("component Mount")
//     }
//     componentDidUpdate(){
//         console.log("component Update")
//     }

//     render(){
//         return(
//             <>
//                 <h1>This is componentDidUpdate</h1>
//                 <h2>Data Is : {this.state.data}</h2>
//                 <button onClick={()=>{this.setState({data:"Avneesh Kumar Verma"})}}> update State</button>
//             </>
//         )
//     }
// } 

// export default Users;



//should componentstop => if true components update if false block render


// import React, {Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         this.state = {data:1}
//     }
//     componentDidMount(){
//         console.log("component Mount")
//     }
//     componentDidUpdate(){
//         console.log("component Update")
//     }
//     shouldComponentUpdate(){
//         console.log("should update")
//             if(this.state.data < 5){
//                 return true
//             }

//     }
//     render(){
//         return(
//             <>
//                 <h1>This is componentDidUpdate</h1>
//                 <h2>Data Is : {this.state.data}</h2>
//                 <button onClick={()=>{this.setState({data:this.state.data+1})}}> update State</button>
//             </>
//         )
//     }
// } 

// export default Users;



// 3. componentwillunmount

// import React , {Component} from "react";

// class Users extends Component{
//     componentWillUnmount(){
//         console.log("Component Removed")
//     }
//     render(){
//         return(
//             <>
//                 <h1>This is componentDidUnmount</h1>
//             </>
//         )
//     }
// }

// export default Users;





//  React Hooks

// 1. useState Hooks

// import React , {useState} from "react";

// const Users = () =>{
//     const [data,setData] = useState(0);
//     return(
//         <>
//             <h1>This is useState Hooks</h1>
//             <h2>Your Value is: {data}</h2>
//             <button onClick={()=>{setData(data+1)}}>Click Here</button>
//         </>
//     )
// }


// export default Users





// 2. useEffect Hook

// import React , {useEffect,useState} from "react";

// const Users = () =>{
//     const [data,setData] = useState(0);
//     useEffect(()=>{
//         console.log("Data Is :",data)
//     },[data])
//     return(
//         <>
//             <h1>This is useState Hooks</h1>
//             <h2>Your Value is: {data}</h2>
//             <button onClick={()=>{setData(data+1)}}>Click Here</button>
//         </>
//     )
// }


// export default Users


// useEffect Props

// import React , {useEffect} from "react";

// const Users = (props) =>{
//     useEffect(()=>{
//         console.log("Data 1 Is  :",props.mydata)
//         console.log("Data 2 Is :",props.mydata2)
//     },[props.mydata])
//     return(
//         <>
//             <h1>This is useState Hooks</h1>
//             <h2>Your Value is: {props.mydata}</h2>
//         </>
//     )
// }


// export default Users



// Css

// import "./style.css"
// import style from "./style.module.css"

// const Users = () =>{
//     return(
//         <>
//             <h1 style={{color:"red",backgroundColor:"blue"}} >This is Style 1</h1>
//             <h1 className="sty2" >This is Style 2</h1>
//             <h1 className={style.sty3} >This is Style 3</h1>
//         </>
//     )
// }

// export default Users




// Bootstrap

// import { Button } from 'react-bootstrap';

// const Users = () =>{
//     return(
//         <>
//             <h1>This is React - Bootstrap</h1>
//             <Button onClick={()=>{alert("This is Bootstrap Button")}} >click here</Button>
//         </>
//     )
// }

// export default Users




// map and for loop in React


// const Users = () =>{
//     // const arr = ["Avneesh","Shivani","Av","Shiva"]
//     const data = [
//         {id:1,name:"Avneesh",email:"avnishldh97@gmail.com"},
//         {id:2,name:"Shivani",email:"shivani@gmail.com"}
//     ]
//     return(
//         <>
//             <h1>This is Map Function</h1>
//             <h2>List of Members Is:</h2>
//             {/* <ul>
//             {arr.map((itam)=>{return <li>{item}</li>})}
//             </ul> */}

//             {data.map((item)=>{
//                 return <h1 key={item.id}>Name: {item.name} || Email: {item.email}</h1>
//             })}
//         </>
//     )
// }

// export default Users









// import Table from 'react-bootstrap/Table';
// const Users = () => {
//     const bio = [
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         }
//     ]
//     return (
//         <div className='container'>
//             <h1>Map Function</h1>
//             <Table striped bordered hover variant="dark">
//                 <thead>
//                     <tr>
//                         <th>S.No.</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {bio.map((item, i) => {
//                         return (
//                             <tr key={i}>
//                                 <td>{i + 1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <Table striped bordered hover variant="dark">
//                                         <tbody>
//                                             {item.address.map((data,idx )=> {
//                                                 return (
//                                                     <tr key={idx}>
//                                                         <td>{data.hn}</td>
//                                                         <td>{data.city}</td>
//                                                         <td>{data.state}</td>
//                                                     </tr>
//                                                 )
//                                             })}
//                                         </tbody>
//                                     </Table>
//                                 </td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }

// export default Users







// import ChildUser from "./ChildUser";


// const Users = () =>{
//     const bio = [
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         },
//         {
//             name: "Avneesh", email: "Avnishldh97@gmail.com", address: [
//                 { hn: "101", city: "Haridwar", state: "Uttarakhand" }
//             ]
//         }
//     ]
//     return(
//         <>
//             <h1>Component</h1>
//             {bio.map((item,i)=>{
//                 return <ChildUser key={i} data = {item} />
//             })}
            
//         </>
//     )
// }

// export default Users;





// Send Data From Parent to child component

// import MyChild from "./MyChild"

// const Users = () =>{
//     const myName = () =>{
//         alert("Avneesh Kumar Verma")
//     }
//     return(
//         <>
//             <h1>This Is Parent Component</h1>
//             <MyChild data={myName} />
//         </>
//     )
// }

// export default Users;



// Recive Data

// import MyChild from "./MyChild"

// const Users = () =>{
//     const myName = (stu) =>{
//         alert(stu.name + " " +stu.age)
//     }
//     return(
//         <>
//             <h1>This Is Parent Component</h1>
//             <MyChild data={myName} />
//         </>
//     )
// }

// export default Users;




// useMemo Hook => only run when state or props are updated


// import React,{useState} from "react";
// const Users = ()=>{
//     const [count,setCount] = useState(0);
//     const [item,setItem] = useState(1);

//     const myfun = () =>{
//         console.log("Myfun")
//         return count*2
//     }
//     return(
//         <>
//             <h1>This is useMemo Hook</h1>
//             <h1>Count : {count}</h1>
//             <h1>Item : {item}</h1>
//             <h1>MyFun Value : {myfun()}</h1>
//             <button onClick={()=>setCount(count+1)}>update count</button>
//             <button onClick={()=>setItem(item*2)}>update item</button>
//         </>
//     )
// }

// export default Users;


// Avoid This Proplem 

// import React,{useState,useMemo} from "react";
// const Users = ()=>{
//     const [count,setCount] = useState(0);
//     const [item,setItem] = useState(1);

//     const myMemo = useMemo(() =>{
//         console.log("Myfun")
//         return count*2
//     },[count])
    
//     return(
//         <>
//             <h1>This is useMemo Hook</h1>
//             <h1>Count : {count}</h1>
//             <h1>Item : {item}</h1>
//             <h1>MyFun Value : {myMemo}</h1>
//             <button onClick={()=>setCount(count+1)}>update count</button>
//             <button onClick={()=>setItem(item*2)}>update item</button>
//         </>
//     )
// }

// export default Users;




// Pure Component   =>avoid Updating the component when the value is not Changing

// import React,{Component} from "react";

// class Users extends Component{
//     constructor(){
//         super()
//         this.state = {
//             data:1
//         }
//     }
//     render(){
//         console.log("render")
//         return(
//             <>
//                 <h1>THis is Pure Component</h1>
//                 <h1>Data Is: {this.state.data}</h1>
//                 <button onClick={()=>this.setState({data:1})}>update data</button>
//             </>
//         )
//     }
// }

// export default Users;



// import React,{PureComponent} from "react";

// class Users extends PureComponent{
//     constructor(){
//         super()
//         this.state = {
//             data:1
//         }
//     }
//     render(){
//         console.log("render")
//         return(
//             <>
//                 <h1>THis is Pure Component</h1>
//                 <h1>Data Is: {this.state.data}</h1>
//                 <button onClick={()=>this.setState({data:1})}>update data</button>
//             </>
//         )
//     }
// }

// export default Users;


