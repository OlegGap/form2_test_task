const dropdownContent = document.querySelector('.dropdown-content');
const dropBtn = document.querySelector('.dropbtn');
const phoneInput = document.querySelector('.form-phone input');
const form = document.querySelector('.form');
const formCheckbox = document.querySelector('.checkbox');



dropdownContent.addEventListener('click', hundleDropdownContentClick);

function hundleDropdownContentClick({target}){
    let currentCountry;
    if(target.nodeName==='P'){
        currentCountry =  target.firstElementChild;
    }else if(target.nodeName==='SPAN'){
        currentCountry =  target.previousElementSibling;
    }else{
        currentCountry =  target;    
    }
    phoneInput.value= currentCountry.parentNode.dataset.country;

    dropBtn.firstElementChild.setAttribute('src', `${currentCountry.getAttribute ('src')}`);
}


form.addEventListener('submit', hundleFormSubmit)

function hundleFormSubmit(evt){
    evt.preventDefault();
    let error = "Ошибка: ";
    checkPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if (!checkPhone.test(phoneInput.value)) {
        error += "Формат телефона неверный!";
    }
    if (!formCheckbox.checked) {
        error += '\nПоставить галочку- обязательно!';
    }
    if (error === "Ошибка: ") {
        alert("Отправлено!")
    } else {                                    //show error
        alert(error)
    }
    
}
