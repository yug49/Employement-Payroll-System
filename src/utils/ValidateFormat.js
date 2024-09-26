export const ValiditeSignIn = (email, password) =>{
    const emailValid = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) || /^([+]\d{2})?\d{10}$/.test(email));
    const passwordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    if(!emailValid && !passwordValid) return "Email ID and Password not Valid";
    if(!emailValid) return "Email ID not Valid!";
    if(!passwordValid) return "Password not Valid! It must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 8 and 16 characters long.";

    return null;
}