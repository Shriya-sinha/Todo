import Todoitem from "./todoitem";
import PropTypes from "prop-types";
const Todolist = ({todoItems}) => {

  return (
    <>
      {todoItems.map((item) => (
        <Todoitem key={item} todoName={item.name} todoDate={item.duedate} />
      ))}
    </>
  );
}
Todolist.propTypes = {
  todoItems:PropTypes.object,
};
export default Todolist
