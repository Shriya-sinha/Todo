import Todoitem from "./todoitem";
import PropTypes from "prop-types";
const Todolist = ({Todoitems,onDeleteItem}) => {
  return (
    <>
      {Todoitems.map((item) => (
        <Todoitem key={item} todoName={item.name} todoDate={item.duedate} onDeleteItem={onDeleteItem}/>
      ))}
    </>
  );
}
Todolist.propTypes = {
  Todoitems:PropTypes.object,
  onDeleteItem:PropTypes.object,
};
export default Todolist
