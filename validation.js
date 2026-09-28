let users = [{
    name:"Besan",
    email: "besannazzal2@gmail.com",
    password:123456,
    adress : "amman"
}]
const registerForm = document.getElementById("regForm")
if(registerForm){
    registerForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("pass").value
         const confirmPassword = document.getElementById("rePass").value
        const address = document.getElementById("address").value.trim()
             if (
            name === "" ||
            email === "" ||
            password === "" ||
            address === "" ||
            confirmPassword === ""
        )
         {
            alert("Please fill in all fields.")
            return;
        }

         if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }
          if (password !== confirmPassword) {
           alert("Passwords do not match.");
            return;
        }
        const userExist = users.find( (user) => {
            return user.email === email;
        });

        if (userExist) {
             alert("User already have account.")
            return;
        }

        const newUser = {
            name : name ,
            email : email ,
            password : password ,
            address : address
        }
        users.push(newUser)
        console.log("new users ",users);
          alert("Registration successful")
        registerForm.reset()
    })
}
