import { useLocation } from 'react-router';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button title={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

export default Header;
