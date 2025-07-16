import { Fragment } from "react/jsx-runtime";


type Expense = {
    id: number;
    description: string;
    amount: number;
    category: string;
}
interface Props {
  expenseData: Expense[];
  onDelete: (id: number) => void
//   selectedCategory: string;
}

const ExpenseList = ({ expenseData, onDelete } : Props) => {

  return (
    <Fragment>
      <h1>Expense List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenseData.map((expense) => {
            return (
              <tr key={expense.id}>
                <th scope="row">{expense.id}</th>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => onDelete(expense.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th>
              Total:{" "}
              {expenseData.reduce((acc, expense) => acc + expense.amount, 0)}
            </th>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default ExpenseList;
