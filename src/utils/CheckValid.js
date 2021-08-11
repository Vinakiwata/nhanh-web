export const  validateEmail = email => {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

export const  validatePassword = password => {
    let a = /\d/;
    let b = /[a-zA-Z]/;
    return a.test(password) && b.test(password);
}

export const checkPhoneValid = phone => {
    phone = phone && phone.trim();
    let iError = !phone? 'Số điện thoại không được để trống': 
    phone.charAt(0) !== '0'? 'Số điện thoại cần bắt đầu bằng 0':
    isNaN(phone) === true?'Số điện thoại không được chứa kí tự':
    phone.length < 10? 'Chiều dài số điện thoại chưa đúng': '';
    return iError;
}