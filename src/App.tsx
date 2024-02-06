// import Message from "./Message";
// import ListGroup from "./assets/components/ListGroup";








// function App()
// {
//   return <div><ListGroup/></div>
// }
// export default App

// implementing props 


// import ListGroup from "./assets/components/ListGroup";

// function App()
// {
//   let states = ['kerla','tn','mumbai','manali'];
//   return <div><ListGroup states={states} heading = 'States'/></div>
// }
// export default App

// implementing passing function to props 

// import ListGroup from "./assets/components/ListGroup";

// function App()
// {
//   let states = ['kerla','tn','mumbai','manali'];
//   let handlerSelect = (item:String) => console.log(item)
//   return <div><ListGroup states={states} heading = 'States' onSelectItem={handlerSelect}/></div>
// }
// export default App


// alert using text 
// import Alert from "./assets/components/Alert";

// function App()
// {

//   return <div><Alert text='Hello world'/></div>
// }
// export default App


// alert using html and text incorporation
// import Alert from "./assets/components/Alert";

// function App()
// {

//   return <div><Alert>Hello <span><b>World</b></span></Alert></div>
// }
// export default App

// implementing my own button 

// import Button from "./assets/components/Button"

// function App()
// {
//   let handleClick = ()=>alert('hey');
//   return <button><Button color="danger" text={'Click Me'} onClick={handleClick}/></button>
// }
// export default App

// implementing button and alert components together 

// import Button from "./assets/components/Button"
// import Alert from "./assets/components/Alert";
// import { useState } from "react";
// function App()
// {

//   let [visibility,setVisibility] = useState(false)
//   return(
//   <>
 
//   <div>{visibility&&<Alert onClose={()=>setVisibility(false)}>Hello World</Alert>}</div>
//    <button><Button color="danger" text={'Click Me'} onClick={()=>setVisibility(true)}/></button>
//    </>
//   )
// }
// export default App



// implement css in js with listgroup2.tsx





// import ListGroup2 from "./assets/components/ListGroup2";

// function App()
// {
//   let states = ['kerla','tn','mumbai','manali'];
//   let handlerSelect = (item:String) => console.log(item)
//   return <div><ListGroup2 states={states} heading = 'States' onSelectItem={handlerSelect}/></div>
// }
// export default App


// import Button from "./assets/components/Button/Button";

// function App()
// {
//   return <div><Button></Button></div>
// }
// export default App


// build like icon 

// import Like from "./assets/components/Like"

// function App()
// {
//   return <div><Like onClick={()=>console.log('clicked')}/></div>
// }
// export default App
// updating objects 
// import { useState } from "react";
// function App(){
//   const [drink,setDrink] = useState(
//     {
//       title : 'Americano',price : 6
//     }
  
//   )
//   const handleClick = ()=>{
    
//     setDrink({...drink,price:10});
    
//   } 
//   return(
//     <div>
//       <h1>{drink.title}</h1>
//       <p>Price: ${drink.price}</p>
//       <button onClick={handleClick}>Click Me</button></div>
//   )
// }
// export default App

// updating nested objects 
// import { useState } from "react";
// function App()
// {
//   const [customer,setCustomer] = useState({name:'sayeed',address : {
//     city:'kdlr',
//     pin:'680666'
//   }})
//   const handlerClick = ()=>{
//     setCustomer({...customer,address:{...customer.address,pin:'680663'}})
//   }
//   return (
//     <div><p>{customer.name} <br /> {customer.address.city} <br />{customer.address.pin}</p><button onClick={handlerClick}>Click me</button></div>
//   )
// }

// export default App;


// updating array 
// import { useState } from "react";

// function App()
// {
//   const [tags,setTags] = useState(['happy','cheerful']);
//   const handleClick = ()=>{
//     // add
//     setTags([...tags,'excited'])
//     // remove 
//     setTags(tags.filter(tag => tag !== 'happy'))

//     // update 
//     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
//   }
//   return (
//     <>
   
//     <p>{tags.map(tag => <span key={tag}>{tag }  <br></br></span>)}</p>
//     <button onClick={handleClick}>Click me</button>
//     </>
//   )
// }
// export default App;


// sharing states between components 

// import NavBar from "./assets/components/NavBar";
// import Cart from "./assets/components/Cart";
// import { useState } from "react";

// function App()
// {
//   const[cartItem,setCartItem] = useState(['product-1','product-2'])
//   return (
//     <div>
//       <NavBar cartItemCount={cartItem.length}></NavBar>
//       <Cart cartItem={cartItem} onClear={()=>{setCartItem([])}}></Cart>
//     </div>
//   )
// }
// export default App;


// exercise 12 in 5 
// import { useState } from "react";
// function App()
// {
//   const [game,setGame] = useState({
//     player : 'Sayeed'     

//   })
//   const handleClick = ()=>{
//    setGame({...game,player:'Sayeed Safvan PM'})
//   } 
//   return (
//     <>
//     <p>{game.player}</p>
//     <button onClick={handleClick}>Click me</button>
//     </>
//   )
// }
// export default App 

// add new topping exercise 
// import { useState } from "react";
// function App()
// {
//   const [pizza,setPizza] = useState({name:'Pepperoni',toppings:['Mushroom']})
//  const handlerClick = ()=> {
//   setPizza({...pizza,toppings : [...pizza.toppings,'Cheese','pineapple']})
//  }
//  return (
//   <>
//   <p>{pizza.name } {pizza.toppings.map((item) => <li key={item}>{item}</li>)} </p>
//   <button onClick={handlerClick}>click me</button>
//   </>
//  )
// }

// export default App;


// expandable text 
// import ExpandableText from "./assets/components/ExpandableText";
// function App()
// {
// return (

//   <ExpandableText maxChars={10}>
 
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus perspiciatis incidunt dicta in repudiandae. Officiis, blanditiis veniam earum modi ullam suscipit, est expedita accusantium ducimus delectus, qui ipsum natus.  </ExpandableText>
// )
// }
// export default App;


// build a form 
// import Form from "./assets/components/Form"
// function App()
// {
//   return (
//     <Form/>
//   )
// }
// export default App



// build expense form 

import { useState } from "react";
import ExpenseList from "./assets/components/expenseForm/components/ExpenseList";
import ExpenseFilter from "./assets/components/expenseForm/components/ExpenseFilter";
import { DIV,DIV2 } from "./assets/components/expenseForm/components/divStyle";
import ExpenseForm from "./assets/components/expenseForm/components/ExpenseForm";
import category from "./assets/components/expenseForm/components/category";

const App = () => {
  const [selectedCategory,setSelectedCategory] = useState('')
  const [expense,setExpense] = useState([
    {id:1,description:'aaa',amount:100,category:'Grocery'},
    {id:2,description:'bbb',amount:200,category:'Shopping'}
  ])
  const visibileExpenses = selectedCategory ? expense.filter(e => e.category == selectedCategory) : expense 
  return (
    
    <div>
     <DIV2>
      <h1 className="display1 text-danger"><u>Expense Tracker</u></h1>
      </DIV2>
   
      <DIV>
        <h2>Submit an expense</h2>
      <ExpenseForm onSubmit={newexpense => setExpense([...expense,{...newexpense,id:expense.length+1}])}/>
      </DIV>
      <DIV>
        
       
        <h2>View & Manage Expenses</h2>
        <div className="mb-3">  <ExpenseFilter onSelectCategory={(category)=>setSelectedCategory(category)}/></div>
      <ExpenseList expenses={visibileExpenses} onDelete={(id)=>setExpense(expense.filter(e => e.id !== id))}/>
      </DIV>
    </div>
  )
}

export default App