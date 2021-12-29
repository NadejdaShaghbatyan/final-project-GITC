function validation(e) {
    let student_name = document.getElementById("name");
   

    if (!student_name.value) {
        console.log(student_name.value);
        student_name.style.borderBlockColor = "red"
        student_name.value = "գրեք ձեր անունը"
    }


    let student_surname = document.getElementById("surname");
 


    if (!student_surname.value) {
        student_surname.style.borderBlockColor = "red"
        student_surname.value = "գրեք ձեր ազգանունը"
    }

    let student_hayranun = document.getElementById("hayranun");
 


    if (!student_hayranun.value) {
        console.log(student_hayranun.value);
        student_hayranun.style.borderBlockColor = "red"
        student_hayranun.value = "գրեք ձեր ազգանունը"

    }

    let student_tiv = document.getElementById("tiv");
   


    if (!student_tiv.value) {
        console.log(student_tiv. value);
        student_tiv.style.borderBlockColor = "red"
        student_tiv.value = "գրեք ձեր ծննդյան  թիվը"

    }
    let student_tel = document.getElementById("tel");
    


    if (!student_tel.value) {
        console.log(student_tel. value);
        student_tel.style.borderBlockColor = "red"
        student_tel.value = "գրեք ձեր հեռախոսահամարը"

    }
    let student_email = document.getElementById("email");
  

    if (!student_email.value) {
        console.log(student_email. value);
        student_email.style.borderBlockColor = "red"
        student_email.value = "գրեք ձեր էլեկտրոնային հասցեն"

    }

}



