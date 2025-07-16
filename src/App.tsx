import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import { categories } from "./catgories";

function App() {

  // State to update the expense form data
  const [expenseData, setExpenseData] = useState([
    { id: 1, description: "spent at Zomato", amount: 100, category: "food" },
    {
      id: 2,
      description: "Uber ride to airport",
      amount: 350,
      category: "travel",
    },
    {
      id: 3,
      description: "monthly house rent",
      amount: 12000,
      category: "rent",
    },
    {
      id: 4,
      description: "dinner at McDonald's",
      amount: 250,
      category: "food",
    },
    {
      id: 5,
      description: "train ticket to Mumbai",
      amount: 800,
      category: "travel",
    },
    { id: 6, description: "lunch at Subway", amount: 180, category: "food" },
    {
      id: 7,
      description: "paid rent for July",
      amount: 12000,
      category: "rent",
    },
    { id: 8, description: "flight to Delhi", amount: 4500, category: "travel" },
    {
      id: 9,
      description: "breakfast at Cafe Coffee Day",
      amount: 120,
      category: "food",
    },
    {
      id: 10,
      description: "advance rent payment",
      amount: 6000,
      category: "rent",
    },
  ]);

  // state to update the selected category that comes from the filter component
  const [selectedCategory, setSelectedCategory] = useState("");


  const onSelectedCategory = (category: string) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const filteredData = selectedCategory
    ? expenseData.filter((expense) => expense.category === selectedCategory)
    : expenseData;

  // console.log(filteredData);

  const onDelete = (id: number) => {
    setExpenseData(filteredData.filter((expense) => expense.id !== id));
  };

  return (
    <>
      <div className="mb-3">

        <ExpenseForm onSubmit={(expense) => setExpenseData([...expenseData, {...expense, id: expenseData.length + 1 }]) }/>

      </div>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectedCategory={onSelectedCategory}
        />
      </div>
      <ExpenseList expenseData={filteredData} onDelete={onDelete} />
    </>
  );
}

export default App;
