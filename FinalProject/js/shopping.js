
document.addEventListener('DOMContentLoaded', () =>{
	
	
	var myForm = document.forms[0];
    var myBtn = document.getElementById('btnCart');
    var totalAmountPrice = 0;
    var totalQtyItems = 0;

    myBtn.onclick = function () {
        
        totalAmountPrice = 0;
        totalQtyItems = 0
        for (let i = 1 ; i <= document.getElementsByClassName('foodIteam').length ; i++){
            totalAmountPrice += (document.querySelector('#qtyItem'+ i).value ) * (document.querySelector('#priceItem'+ i).textContent);
            
            if (document.querySelector('#qtyItem'+ i).value > 0){
                totalQtyItems = totalQtyItems + Number(document.querySelector('#qtyItem'+ i).value)
            }

        }
        document.getElementById('amount').textContent = totalAmountPrice;
       
        
    }

	
	myForm.addEventListener('submit', (e)=>{
		

        totalAmountPrice = 0;
        totalQtyItems = 0
        for (let i = 1 ; i <= document.getElementsByClassName('foodIteam').length ; i++){
            totalAmountPrice += (document.querySelector('#qtyItem'+ i).value ) * (document.querySelector('#priceItem'+ i).textContent);
            
            if (document.querySelector('#qtyItem'+ i).value > 0){
                totalQtyItems = totalQtyItems + Number(document.querySelector('#qtyItem'+ i).value)
            }

        }
        document.getElementById('amount').textContent = totalAmountPrice;
       
        localStorage.setItem('myTotalAmountPrice', totalAmountPrice);
        localStorage.setItem('myTotalQtyItems', totalQtyItems);


	})
	
})


