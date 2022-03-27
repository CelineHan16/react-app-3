import "./Table.css";

function Table(props) {
  const tRow = props.src.map((table) => 
    <tr>
      <td>{table.id}</td>
      <td>{table.name}</td>
      <td>{table.from}</td>
    </tr>
  );
  return (
    <table className="Table">
      {tRow}
    </table>
  );
}

export default Table;