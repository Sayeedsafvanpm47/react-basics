import category from "./category"
interface Props{
          onSelectCategory : (category:string)=>void 
}

const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (

    <select className="form-select mb-40" onChange={(event)=>onSelectCategory(event.target.value)}>
          <option value="">All Categories</option>
        {category.map(category => <option value={category}>{category}</option>)}
    </select>
 
  )
}


export default ExpenseFilter