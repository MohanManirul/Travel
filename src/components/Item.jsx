

const Item = ({item, onToggleItem, onDeleteItem , onCompleteItem}) => {
    return (
       <table>
            <tr>

                <td  className='listStyle'>
                    <input 
                        type="checkbox"  
                        value={item.packed}
                        onChange={()=> onToggleItem(item.id)}
                    />
                    <span className="itemDesign" style={item.packed ? {textDecoration: "line-through"} : {}}>
                        {item.quantity} {item.description}
                    </span>
                
                    <button  onClick={()=> onDeleteItem(item.id)} className="btn btn-danger buttonDesign">Delete</button>
                    <button onClick={()=> onCompleteItem(item.description)} className="btn btn-success buttonDesign">Complete</button>
                </td>
            </tr>

       </table>
    );
};

export default Item;