function matchPassword(form) {  
      password1 = form.password1.value;
      password2 = form.password2.value; 
      //if password was not entered
      if (password1 == '')
      {
      	alert("Please enter password");
      }
      else if (password2 == '')
      {
      	alert("Please enter confirm password");
      }
      else if(password1.length < 8)
      {
      	alert("Password must be at least 8 characters long!");
      	return false;
      }
      //if they are not the same
      else if(password1 != password2)  
      {   
        alert("Passwords did not match");  
        return false;
      } 
      else 
      {  
        alert("Password created successfully");  
        return true;
      }  
    }  
