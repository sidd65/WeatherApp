console.log('JS loaded');
const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const message1 = document.querySelector('#mes-1');
const message2 = document.querySelector('#mes-2');
const message3 = document.querySelector('#mes-3');
weatherForm.addEventListener('submit',(e)=>{
    message1.textContent="loading"
    e.preventDefault();
    const searchText = searchInput.value;
    fetch(`/weather?address=${searchText}`).then((res)=>{
    res.json().then((s)=>{
        message1.textContent= s.currently.summary;
        message3.textContent= s.currently.humidity;
    })
    
})
})