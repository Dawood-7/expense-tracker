import { Fragment } from "react/jsx-runtime";

interface Props {
  categories: readonly string[];
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectedCategory }: Props) => {
  return (
    <Fragment>
      <select
        name=""
        id=""
        className="form-select"
        onChange={(e) => onSelectedCategory(e.target.value)}
      >
        {categories.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
};
export default ExpenseFilter;
