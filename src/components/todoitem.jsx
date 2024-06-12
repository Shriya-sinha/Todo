import PropTypes from 'prop-types' 

const Todoitem = ({todoName,todoDate,onDeleteItem}) => {
  return (
    <div>
      <div className="row a-row">
        <div className="col-4 item">{todoName}</div>
        <div className="col-4 item">{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-dark shadow rounded-pill"
          onClick={() => onDeleteItem(todoName)}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
Todoitem.propTypes = {
  todoName: PropTypes.string,
  todoDate: PropTypes.string,
  onDeleteItem: PropTypes.object,
};
export default Todoitem
