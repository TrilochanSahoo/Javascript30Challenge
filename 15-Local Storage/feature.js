const itemList = document.querySelector('.dishes');
const addItems = document.querySelector('.add-items');
const items = JSON.parse(localStorage.getItem('items'))||[];

function additem(e){
    e.preventDefault();
    // console.log(e)
    const text = (this.querySelector('[name = item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item)
    addItemList(items,itemList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();

}

function addItemList(dishes = [], dishList){
    dishList.innerHTML = dishes.map((dish, i)=>{
        return `
        <li>
            <input type="checkbox" data-index=${i} id=item${i} ${dish.done?'checked':''}/>
            <label for="item${i}">${dish.text}</label>
        </li>
        `
    }).join('');
}

function toggleMenu(e){
    if(!e.target.matches('input')){
        return;
    }
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    addItemList(items, itemList);
}

addItems.addEventListener('submit', additem);
itemList.addEventListener('click', toggleMenu);

addItemList(items, itemList)