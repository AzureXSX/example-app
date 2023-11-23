

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const img_input = document.getElementById('img-input-x');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const UserNamePattern = /^[a-zA-Z0-9._%+-]{3,}$/;
const userLabel = document.querySelectorAll('label')[0];
const emailLabel = document.querySelectorAll('label')[1];
function SelectImg(){ img_input.click() };


const UserName = document.querySelectorAll("input")[1];

UserName.addEventListener("blur", (e) => {
  if(e.target.value.length <= 0)
  {
    userLabel.classList.remove('placeholder-x-active');    
    UserName.style.borderColor = "aqua";
    userLabel.classList.remove('placeholder-x-invalid-label');
  }

    if (!UserNamePattern.test(e.target.value) && e.target.value.length > 0) {
      UserName.style.borderColor = "red";
      userLabel.classList.add('placeholder-x-invalid-label');
    }
    else{
      UserName.style.borderColor = "#373e47";
      userLabel.classList.remove('placeholder-x-invalid-label');
    }
});

UserName.addEventListener("focus", (e) => {
  UserName.style.borderColor = "aqua";
  userLabel.classList.remove('placeholder-x-invalid-label');
  if(!userLabel.classList.contains('placeholder-x-active'))
  userLabel.classList.add('placeholder-x-active');
})

const userEmail = document.querySelectorAll("input")[2];

userEmail.addEventListener("blur", (e) => {
  if(e.target.value.length <= 0){
    emailLabel.classList.remove('placeholder-x-active');
    userEmail.style.borderColor = "aqua";
    emailLabel.classList.remove('placeholder-x-invalid-label');
  }

    if (!emailPattern.test(e.target.value) && e.target.value.length > 0) {
      userEmail.style.borderColor = "red";
      emailLabel.classList.add('placeholder-x-invalid-label');
    }
    else{
      userEmail.style.borderColor = "#373e47";
      emailLabel.classList.remove('placeholder-x-invalid-label');
    }
});

userEmail.addEventListener("focus", (e) => {
  userEmail.style.borderColor = "aqua";
  emailLabel.classList.remove('placeholder-x-invalid-label');
  if(!emailLabel.classList.contains('placeholder-x-active'))
    emailLabel.classList.add('placeholder-x-active');
})

userEmail.addEventListener("change", (e) => {

  if (!emailPattern.test(e.target.value)) {
    userEmail.style.borderColor = "red";
    emailLabel.classList.add('placeholder-x-invalid-label');
  }
})

img_input.onchange = (evt) => {
    var tgt = evt.target;
    
    var files = tgt.files;
    
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('bg-x-img').style.backgroundImage = 'url(' + fr.result + ')';
         
        }
        fr.readAsDataURL(files[0]);
    }
    
    else {
        console.log('Your browser doesn\'t suport FileReader');
    }
}

document.getElementById('input-form-x').onsubmit = async (e) => {
    e.preventDefault();
    const file = document.getElementById('img-input-x').files[0];
    if(!file){
      alert('Pls Select User Avatar Image.');
      return;
    }
    const data = {
        userName: document.getElementsByName('name')[0].value,
        userEmail: document.getElementsByName('email')[0].value,
        userImg: await toBase64(file),
    };

    if(emailPattern.test(userEmail.value) && UserNamePattern.test(UserName.value)){
      fetch('/uwu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify(data),
      }).then(async (response) => {
        if (response.ok) {
            UserName.value = "";
            userEmail.value = "";
            img_input.value = '';
            window.location  = response.url;
            // Redirect to the next view after successful processing
            // window.location.href = '/next-view'; // Change this to your desired URL
          } else {
            // Handle other cases, like errors
          }
      })
    }
    else{
      alert('Pls fill all fields correctly.')
    }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

window.SelectImg = SelectImg;