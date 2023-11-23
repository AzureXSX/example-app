
const divbox = document.getElementById('bg-x-img');
fetch('/getSessionData') // Replace with your endpoint
.then(response => response.json())
.then(data => {
    divbox.style.backgroundImage = 'url(' + data.userImg + ')';
    document.querySelectorAll('.label-x')[0].innerHTML = 'User: ' + data.userName;
    document.querySelectorAll('.label-x')[1].innerHTML = 'Email: ' + data.userEmail;
})
.catch(error => {
    console.error('Error:', error);
});
console.log('xxxxxxxxxxxxxxxxx');

