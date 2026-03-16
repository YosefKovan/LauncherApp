import "./LauncherTable.css";

function Card({ launcher }) {
  
  
  function getAllRows(){
    
    const rows = []
    
    let index = 0;

    for(const key in launcher){
      rows.push(
        <tr className="row" key={index}>
          <td>{key}</td>
          <td>{launcher[key]}</td>
        </tr>
      )

      index++;
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


