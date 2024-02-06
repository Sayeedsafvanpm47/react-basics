import styled from 'styled-components';
interface Expense{
          id:number,
          description:string,
          category:string,
          amount:number
}
interface Props{
          expenses : Expense[],
          onDelete : (id:number) => void
}

const ExpenseList = ({expenses,onDelete}:Props) => {
          if(!expenses.length) return null
  return( 
          <div>
   <table className="table table-bordered text-white">
          <thead>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Action</th>
          </thead>
          <tbody>
                    {expenses.map(expense => <tr key={expense.id}>
                              <td>{expense.description}</td>
                              <td>{expense.amount}</td>
                              <td>{expense.category}</td>
                              <td><button className="btn btn-outline-danger" onClick={()=>onDelete(expense.id)}>Delete</button></td>
                    </tr>)}
          </tbody>
          <tfoot>
         <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</td>
          <td></td>
          <td></td>
         </tr>
          </tfoot>
   </table>
   </div>    
  )
  
}

export default ExpenseList