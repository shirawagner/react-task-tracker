import Button from "./Button";

import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
