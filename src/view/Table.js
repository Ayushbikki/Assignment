import '../App.css'
const Table = ({ data }) => {
    return (
       
      <table className="table_center">
        <tbody>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>Occupation</th>
          </tr>
          {data.map((item) => (
            <tr key={item.age}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  };
  
  export default Table;