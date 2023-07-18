
import Item from './Item';

const PackingList = ({items, onToggleItem, onDeleteItem,onCompleteItem,taskList}) => {
    let sortedItems = items; 
    let sortTaskLists = taskList;
    return (
        <tr>
        
            <div className="list  float-left">
             

                <ol className='numberList'>
                    <p>Travel List</p>
                    { sortedItems.length !==0?(sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onToggleItem = {onToggleItem}
                            onDeleteItem = {onDeleteItem}
                            onToggleCompleteItem = {onCompleteItem}
                        />
                    ))) : (<li className='listStyle'>No Item Available</li>)
                    }
                </ol>  
            
            </div>

            <div className='float-end'>
                <div className=''>Complted Task</div>
                <ol>
                { sortTaskLists.length !==0?(sortTaskLists.map((taskItem) => (
                        <li>{taskItem}</li>
                    ))) : (<div className='container'>No Task Available</div>)
                    }
                </ol>
            </div>
        </tr>
    );
};

export default PackingList;