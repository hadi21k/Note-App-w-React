import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
const AddNote = () => {
  const addNote = () => {};
  return (
    <div>
      <Link to="/note/new" className="floating-button">
        <AddCircleIcon className="add-btn" onClick={addNote} fontSize="large" />
      </Link>
    </div>
  );
};

export default AddNote;
