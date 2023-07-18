

const Item = ({item, onToggleItem, onDeleteItem , onToggleCompleteItem}) => {
    return (
    
            <ol>

                <td  className='listStyle'>
                    <input 
                        type="checkbox"  
                        value={item.packed}
                        onChange={()=> onToggleItem(item.id)}
                        onClick={()=> onToggleCompleteItem(item.description)}
                    />
                    <span  className="itemDesign" style={item.packed ? {textDecoration: "line-through"} : {}}>
                        {item.quantity} {item.description}
                    </span>
                
                    <button  onClick={()=> onDeleteItem(item.id)} className="btn btn-danger buttonDesign">Delete</button>
                  
                    
                </td>
            </ol>

    );
};

export default Item;