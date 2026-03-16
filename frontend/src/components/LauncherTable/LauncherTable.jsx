import "./LauncherTable.css";

function Card({ launcher }) {
  
  
  function getAllRows(){
    
    const rows = []

    for(const key in launcher){
      rows.push(
        <tr className="row">
          <td>{key}</td>
          <td>{launcher[key]}</td>
        </tr>
      )
    }

    return rows;
  }
  
  return (
    <table className="launcher-table">
      <tbody>
          {getAllRows()}
      </tbody>
    </table>
    
    
    
    
    
  );
}

export default Card;


