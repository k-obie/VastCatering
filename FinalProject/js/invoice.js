
document.addEventListener('DOMContentLoaded', ()=>{

    
	if (localStorage.getItem('myTotalAmountPrice') > 0){
        document.querySelector('#productName1').textContent = 'Food';
        document.querySelector('#productPrice1').textContent = localStorage.getItem('myTotalAmountPrice');
        document.querySelector('#productQuantity1').textContent = localStorage.getItem('myTotalQtyItems');
        document.querySelector('#subtotal').textContent = localStorage.getItem('myTotalAmountPrice');
        document.querySelector('#taxTPS').textContent = Math.round(((localStorage.getItem('myTotalAmountPrice')) * 0.05)* 100) / 100;
        document.querySelector('#taxTVQ').textContent = Math.round(((localStorage.getItem('myTotalAmountPrice')) * 0.09975) * 100) / 100 ;
        document.querySelector('#totalAndTax').textContent  = (((Number(document.querySelector('#subtotal').textContent)) * 100) + ((Number(document.querySelector('#taxTPS').textContent)) * 100 ) + ((Number(document.querySelector('#taxTVQ').textContent) * 100))) / 100 ;
        document.querySelector('#formPrice').textContent = document.querySelector('#totalAndTax').textContent;


    }



    var inputs = document.querySelectorAll('input');
	
	var pattern = {
		
		cardNum:/(^\d{15,16}$$)/,
		cvc:/^\d{3}$/,
		cardName:/^[a-zA-Z]+\s[a-zA-Z]+$/,
		cardExpiration:/^(0[0-9]|1[012])\/\d{2}$/,
		addName:/^[a-zA-Z]+\s[a-zA-Z]+$/,
        addAddress1:/^[\d]+\s[a-zA-Z0-9]+$/,		
        addAddress2:/(^[\d]+\s[a-zA-Z0-9]+$)/,        
		addCity:/^[a-zA-Z]+$/,
        addPostCode:/^[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]$/,
		addProvince:/^[a-zA-Z]+$/,
		addCountry:/^[a-zA-Z]*$/,
		
	}
	
	
	function validate(field, regEx){
       
        
		if(regEx.test(field.value)){
			
			field.className = 'valid';
            return true;
		}else{			
			field.className = 'invalid';
            if (!field.value){
                field.className = '';
            }
            return false;
		}

        
		
	}
	
	
	inputs.forEach((input)=>{
		
		
		input.addEventListener('keyup', (e)=>{
			
			

            if (validate(e.target, pattern[e.target.attributes.name.value]))
            {
                
                isValid = true;
            }
            else{
                isValid = false;
            }


           
		})


		
	})

    var addForm = document.querySelector('#invoiceForm');
    
    var DateObj = new Date();
   
    var currentMonth = DateObj.getMonth() + 1;
    
    var currentYear = DateObj.getFullYear() - 2000;

    addForm.addEventListener('submit', (e)=>{

       
        let cardYear = addForm.querySelector('#cardExpiration').value[3] + addForm.querySelector('#cardExpiration').value[4];
        
        let cardMonth = addForm.querySelector('#cardExpiration').value[0] + addForm.querySelector('#cardExpiration').value[1];
        

        if (Number(currentYear) >  Number(cardYear))
        {
            alert("Please Enter Valid Expire Date(mm/yy)");
            e.preventDefault();
            return;
        }

        if (Number(currentYear) ==  Number(cardYear) &&  Number(currentMonth) >  Number(cardMonth))
        {
            alert("Please Enter Valid Expire Date(mm/yy)");
            e.preventDefault();
            return;
        }




         
        let cardNumCheck = addForm.querySelector('#cardNum').value;
        
        if (cardNumCheck.length < 15 || cardNumCheck.length > 16)
        {
            alert("Please Enter Valid Card Number");
            e.preventDefault();
            return;
        }
        

        if (!addForm.querySelector('#terms').checked){
            alert("Please fill all required fields.");
             e.preventDefault();
            return;   
                  
        }

        if (!validate(addForm.querySelector('#cardName'), pattern[addForm.querySelector('#cardName').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;         
        }
        
        if (!validate(addForm.querySelector('#cardNum'), pattern[addForm.querySelector('#cardNum').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;
        }
        

        if (!validate(addForm.querySelector('#cvc'), pattern[addForm.querySelector('#cvc').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;            
        }
               
        if (!validate(addForm.querySelector('#cardExpiration'), pattern[addForm.querySelector('#cardExpiration').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;         
        }

        if (!validate(addForm.querySelector('#addName'), pattern[addForm.querySelector('#addName').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;         
        }
 
        if (!validate(addForm.querySelector('#addAddress1'), pattern[addForm.querySelector('#addAddress1').attributes.name.value])){
            alert("Please fill all required fields.");
            e.preventDefault();
            return;        
        }
         
        if (!validate(addForm.querySelector('#addCity'), pattern[addForm.querySelector('#addCity').attributes.name.value])){
            alert("Please fill all required fields."); 
            e.preventDefault();
            return;            
        }
         
        if (!validate(addForm.querySelector('#addPostCode'), pattern[addForm.querySelector('#addPostCode').attributes.name.value])){
            alert("Please fill all required fields."); 
            e.preventDefault();
            return;            
        }
         
        if (!validate(addForm.querySelector('#addProvince'), pattern[addForm.querySelector('#addProvince').attributes.name.value])){
            alert("Please fill all required fields."); 
            e.preventDefault();
            return;            
        }

        if (addForm.querySelector('#addCountry').value){            
            if (!validate(addForm.querySelector('#addCountry'), pattern[addForm.querySelector('#addCountry').attributes.name.value])){
                alert("Please fill all fields correctly.");
                e.preventDefault();
                return; 
            }           
        }
        if (addForm.querySelector('#addAddress2').value){            
            if (!validate(addForm.querySelector('#addAddress2'), pattern[addForm.querySelector('#addAddress2').attributes.name.value])){
                alert("Please fill all fields correctly.");
                e.preventDefault();
                return; 
            }           
        }
        
        alert("Thank you for your shopping");
        localStorage.setItem('myTotalAmountPrice', 0);
        localStorage.setItem('myTotalQtyItems', 0);

        
    })

    var btnClear = document.querySelector("#btnClearForm");
    

    btnClear.addEventListener('click', (e)=>{

        location.reload();
        

    })
      
       
	
})