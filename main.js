let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let txtInput = document.getElementById('txtInput');
let txtSearch = document.getElementById('txtSearch');

form.addEventListener('submit',(e)=>{
    if (txtInput.value != "") {
        e.preventDefault();

        let newItem = txtInput.value;
        
        let li = document.createElement('li');
        li.className = 'item-list pl-2 py-2 mb-1 border-2 border-gray-300 rounded-sm shadow-sm flex justify-between';
        li.appendChild(document.createTextNode(newItem));
        
        txtInput.value="";
        txtInput.focus(); 

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete block bg-red-500 hover:bg-red-600 h-auto w-6 rounded-sm text-white font-semibold order-last mr-3';
        deleteBtn.appendChild(document.createTextNode('X'));
        li.appendChild(deleteBtn);

        itemList.appendChild(li);

    } else {
        alert('Form is Blank');
        return false;
    }
});

itemList.addEventListener('click',(e)=>{
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        
        itemList.removeChild(e.target.parentElement);
    }
});

txtSearch.addEventListener('keyup',(e)=>{
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');
    let itemArr = Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = '';
        }else{
            item.style.display = 'none';
        };
    }); 
});