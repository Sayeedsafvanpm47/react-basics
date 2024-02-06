import category from "./category";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";


const schema = z.object({
  description: z
    .string()
    .min(3, { message: "must be minimum 3 charecters" })
    .max(50, { message: "must not exceed 50 charecters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(10, { message: "Amount should be greater than 10" })
    .max(10000, { message: "Amount should be less than 10000" }),
  category: z.enum(category,{errorMap:()=>({message:'Category is required'})}),
});

type ExpenseFormData = z.infer<typeof schema>;
interface Props {
          onSubmit : (data : ExpenseFormData) => void
}
const ExpenseForm = ({onSubmit}:Props) => {
     
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({resolver:zodResolver(schema)});
  return (
    <form onSubmit={handleSubmit((data)=>{
          onSubmit(data)
          reset()
    })}>
      <div className="mb-1">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
      </div>
      <div className="mb-1">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount",{valueAsNumber:true})}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      </div>
      <label>Select a category : </label>
      <div className="mb-3">
        <select {...register("category")} className="form-select">
          <option value="">All Categories</option>
          {category.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        {errors.category && <p className="text-danger">{errors.category.message}</p>}

      </div>
      <div className="mb-3">
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
