import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { categories } from "../catgories";
import z from "zod";

interface Props {
  onSubmit: (data: ExpenseData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z
    .number({ message: "Amount must be a number" })
    .min(1, { message: "Amount must be at least 1 rupee" }),
  category: z.enum(categories, {
    message: "Please select a category from the list",
  }),
});
type ExpenseData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseData>({
    resolver: zodResolver(schema),
  });

  return (
    <Fragment>
      <h1>Expense Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            {...register("description")}
            className="form-control"
            type="text"
            name="description"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            className="form-control"
            type="number"
            name="amount"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>Select a category</option>
            {categories.map((category) => {
              return (
                <option
                  value={category}
                  key={category}
                  defaultValue={"Select a category"}
                >
                  {category}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </Fragment>
  );
};
export default ExpenseForm;
