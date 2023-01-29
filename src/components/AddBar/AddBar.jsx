import { StyleNavLink } from './AddBar.styled';

export const AddBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyleNavLink to="/">Home </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/add">Add contacts </StyleNavLink>
        </li>
      </ul>
    </nav>
  );
};
