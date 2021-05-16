let inputs = document.querySelectorAll('input');
let text = document.querySelectorAll('textarea');
let btn = document.querySelector('.btn-dark');

btn.addEventListener('click', () => {
    let name=document.querySelector('#name').value;
    inputs.forEach(input =>  input.value = '');
    text.forEach(textarea =>  textarea.value = '');
    let firstname = name.split(/(\s+)/);
    let first_name = firstname[0];

    alert(`Thank you ${first_name} your form has been submitted`);
});
