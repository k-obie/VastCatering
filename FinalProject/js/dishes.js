

document.addEventListener('DOMContentLoaded', ()=>{

    var searchButton = document.querySelector('#searchBtn');    
    var showCaseParent = document.querySelector('#showCase');
    var clone;


	searchButton.addEventListener('click',()=>{
        var searchBar =  document.querySelector('#searchInput');       
        var userInput = searchBar.value + ':';

        var menu = document.querySelector('.wrapper');
        var menuList = menu.querySelectorAll('.name');
        menuList.forEach((food)=>{

            
            if (food.textContent.toLocaleLowerCase() == userInput.toLocaleLowerCase())
            {
                var showCaseLastChild = document.querySelector('#showCase').lastElementChild;
                showCaseParent.removeChild(showCaseLastChild);

                let foundFood = food.parentElement;
                clone = foundFood.cloneNode(true);


                showCaseParent.appendChild(clone);

                document.querySelector('#searchInput').value = "";
                

            }

         })

	})


})