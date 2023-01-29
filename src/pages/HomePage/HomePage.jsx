import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from 'redux/Users/usersSelector';
import { deleteUsers } from 'redux/Users/usersSlice';

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <>
      {users.length > 0 ? (
        <>
          <h1>Home</h1>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Age</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, age }, index) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name.charAt(0)}</td>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => dispatch(deleteUsers(id))}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No users</p>
      )}
    </>
  );
};

// <ul>
//   <table>
//     <thead>
//       <tr>
//         <th>№</th>
//         {/* <th>avatar</th> */}
//         <th>name</th>
//         <th>age</th>
//         {/* <th>status</th> */}
//         <th>option</th>
//       </tr>
//     </thead>
//     <tbody>
//       {users.map((user, index) => (
//         <tr key={user.id}>
//           <td>{index + 1}</td>
//           <td>{user.name}</td>
//           <td>{user.age}</td>
//           <td>{user.name}</td>
//           <td>
//             <button onClick={() => dispatch(deleteUsers)}>delete</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </ul>;
