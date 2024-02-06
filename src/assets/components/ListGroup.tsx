

// function ListGroup()
// {
//           return <ul className="list-group">
//           <li className="list-group-item">Cras justo odio</li>
//           <li className="list-group-item">Dapibus ac facilisis in</li>
//           <li className="list-group-item">Morbi leo risus</li>
//           <li className="list-group-item">Porta ac consectetur ac</li>
//           <li className="list-group-item">Vestibulum at eros</li>
//         </ul>



// }

// fragments using import fragments 
// import { Fragment } from "react";
// function ListGroup()
// {
//           return (
//                     <Fragment>
//                               <h1>List groups</h1>

//                               <ul className="list-group">
//      <li className="list-group-item">Cras justo odio</li>
//          <li className="list-group-item">Dapibus ac facilisis in</li>
//     <li className="list-group-item">Morbi leo risus</li>
//          <li className="list-group-item">Porta ac consectetur ac</li>
//           <li className="list-group-item">Vestibulum at eros</li>
//         </ul>
                              
//                     </Fragment>
//           )
// }

// imoprt fragments without import statement and component and also render items dynamically 
// function ListGroup()
// {
//           const states = ['kerla','tn','mumbai','manali'];
//           return (
//                     <>
//                     <h1>List</h1>
//                     {states.map(item => <li key = {item}>{item}</li>)}
//                     </>

//           )
// }
// export default ListGroup;

// render conditionals 

// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
//           states = []
//           let message = states.length===0?<p>No items</p> : null;;
//           return(
//                     <>
//                     <h1>List</h1>
//                     {message}
//                     <ul className="list-group">
//                               {states.map(item => <li key={item}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// defining the same using functions and more concise conditional


// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
//           states = []
//           function GetMessage()
//           {
//                     return  states.length===0 && <p>No items</p>;

//           }
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {GetMessage()}
//                     <ul className="list-group">
//                               {states.map(item => <li key={item}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// inline jsx conditional 

// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
          
   
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map(item => <li className="list-group-item" key={item}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// event handling 

// inline onClick 
// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
          
   
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map(item => <li className="list-group-item" key={item} onClick={()=>console.log(item)}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// inline event
// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
          
   
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map(item => <li className="list-group-item" key={item} onClick={(event)=>console.log(event)}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// using eventHandler 

// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
//           let HandlerClick = (event:React.MouseEvent) => console.log(event)
   
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map(item => <li className="list-group-item" key={item} onClick={HandlerClick}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// active toggle 
// import { useState } from "react";
// function ListGroup()
// {
//           let states = ['kerla','tn','mumbai','manali'];
//           const [selectedIndex,setSelectedIndex] = useState(-1)
   
         
//           return(
//                     <>
//                     <h1>List</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map((item,index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={()=>setSelectedIndex(index)}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// using props 

// passing data via props 


// import { useState } from "react";
// interface Props{
//           states : String[],
//           heading : String
// }
// function ListGroup({states,heading} : Props)
// {
       
//           const [selectedIndex,setSelectedIndex] = useState(-1)
   
         
//           return(
//                     <>
//                     <h1>{heading}</h1>
//                     {states.length===0 && <p>No items</p> }
//                     <ul className="list-group">
//                               {states.map((item,index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={`${item}-${index}`} onClick={()=>setSelectedIndex(index)}>{item}</li>)}
//                     </ul>
                    
//                     </>
                    
//           )
// }
// export default ListGroup

// passing function via props 
import { useState } from "react";
interface Props{
          states : String[],
          heading : String,
          onSelectItem : (item : String) => void;
}
function ListGroup({states,heading,onSelectItem} : Props)
{
       
          const [selectedIndex,setSelectedIndex] = useState(-1)
   
         
          return(
                    <>
                    <h1>{heading}</h1>
                    {states.length===0 && <p>No items</p> }
                    <ul className="list-group">
                              {states.map((item,index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={`${item}`} onClick={()=>
                                        {setSelectedIndex(index);
                                        onSelectItem(item);}
                                        }>{item}</li>)}
                    </ul>
                    
                    </>
                    
          )
}
export default ListGroup