
import Item from './Item';

const PackingList = ({items, onToggleItem, onDeleteItem,onCompleteItem,taskList}) => {
    let sortedItems = items; 
    let sortTaskLists = taskList;
    return (
        <tr>
        
            <div className="list  float-left">
                
                <ul>
                    { sortedItems.length !==0?(sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onToggleItem = {onToggleItem}
                            onDeleteItem = {onDeleteItem}
                            onCompleteItem = {onCompleteItem}
                        />
                    ))) : (<li className='listStyle'>No Item Available</li>)
                    }
                </ul>           
            
            </div>

            <div className='float-end'>
                <div className=''>Complted Task</div>
                <ul>
                { sortTaskLists.length !==0?(sortTaskLists.map((taskItem) => (
                        <li>{taskItem}</li>
                    ))) : (<div className='container'>No Task Available</div>)
                    }
                </ul>
            </div>
        </tr>
    );
};

export default PackingList;