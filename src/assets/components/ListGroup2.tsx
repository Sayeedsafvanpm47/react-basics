import { useState } from "react";
import styled from 'styled-components';
interface Props{
          states : String[],
          heading : String,
          onSelectItem : (item:String)=>void,
      
}

let List = styled.ul`
list-style : none;
padding : 0;
`
interface ListItemProps{
          active : boolean;

}
let ListItem = styled.li<ListItemProps>`
padding : 5px 0px;
color : red;
background : ${props => props.active?'blue':null}
`


const ListGroup2 = ({states,heading,onSelectItem}:Props) => {
          const [selectedIndex,setSelectedIndex] = useState(0)

  return (
 
              <>
                    <h1>{heading}</h1>
                    {states.length===0 && <p>No items</p> }
                    <List>
                              {states.map((item,index) => <ListItem active={index == selectedIndex}  key={`${item}`} onClick={()=>
                                        {setSelectedIndex(index);
                                        onSelectItem(item);}
                                        }>{item}</ListItem>)}
                    </List>
                    
                    </>

  )
}

export default ListGroup2