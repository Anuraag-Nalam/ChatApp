export const validateUsername = (username) => {
    if (!username) {
        return "Username is required!";
    }
    if (/\s/.test(username)) {
        return "Username cannot contain spaces.";
    }
    if (/^[0-9@#_\-]+$/.test(username)) {
        return "Username must contain at least one letter.";
    }
    if (/[^a-zA-Z0-9@#_\-]/.test(username)) {
        return "Username contains invalid characters!";
    }
    if(username.length<5){
        return "Username should contain atleast 5 characters!"
    }
    return "";
};


export const validatePassword=(password)=>{
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{10,}$/;

    if(!password){
        return "Password is required!"
    }

    if (!passwordRegex.test(password)) {
        return "Password must have at least 10 characters, one uppercase letter, one number, and one special character.";
    }

    return "";
}