import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {data} from "./data"

function App() {
  // return <Incrementor />;
  
  return <div className='container'>
  <PeopleArray/>
   <UsestateObject />
   <UsestateGotcha />
   </div>
}

export default App;
// const Incrementor = ()=>{
//   const [count,setCount] = useState(0)

//   const countHandler = () =>{
//     setCount(count+1)
//   }
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={countHandler}>click me</button>
//     </>
//   )
// }

const PeopleArray = () =>{
  const[Peoples,setPeople] = useState(data)

  const clearPerson = (id) =>{
    const newPeoples = Peoples.filter((person)=> person.id !== id)
    setPeople([...newPeoples])
  }

  //alternative way
  // const clearALL = ()=>{
  //   setPeople([])
  // }

  return(
   <div>
    {Peoples.map((person)=>{
      console.log(person)
      const {id,name} = person
      return(
        <div key={id}>
          <h1>{name}</h1>
          <button onClick={()=>clearPerson(id)}>clear</button>
        </div>
      )
    })}
    <button onClick={()=>setPeople([])}>Clear all Users</button>
   </div>
  )
}

const UsestateObject = () =>{

const [person,setPerson] = useState({
  "name":"prakashu",
  "age":20,
  "hobby":"playing games"
})



const clickHandler = () =>{
  setPerson({
    "name":"john",
    "age":56,
    "hobby":"scream at pc"
  })
  
}


return(
  <div>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <h3>{person.hobby}</h3>
    <button onClick={clickHandler}>show john</button>
  </div>
)

}

const UsestateGotcha = () =>{
  const [count,setCount] = useState(0)


const countHandler = () =>{
  setTimeout(()=>{
    setCount((current_state)=>{
      const newState = current_state + 1
      return newState;
    })
  },3000)
}

  return(<>
  <h1>{count}</h1>
  <button onClick={countHandler}>increase</button>
  </>)
}