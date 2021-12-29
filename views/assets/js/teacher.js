function validation() {
    let teacher_name = document.getElementById("name");
    console.log(teacher_name);

    if (!teacher_name.value) {
        console.log(teacher_name.value);
        teacher_name.style.borderBlockColor = "red"
        teacher_name.value = "Gri anund"
    }


    let teacher_surname = document.getElementById("surname");
    console.log(teacher_surname);


    if (!teacher_surname.value) {
        teacher_surname.style.borderBlockColor = "red"
        teacher_surname.value = "Gri azganunt"
    }

    let teacher_hayranun = document.getElementById("hayranun");
    console.log(teacher_hayranun);


    if (!teacher_hayranun.value) {
        console.log(teacher_hayranun.value);
        teacher_hayranun.style.borderBlockColor = "red"
        teacher_hayranun.value = "Gri der hayranun@"

    }

    let teacher_tiv = document.getElementById("tiv");
    console.log(teacher_tiv);


    if (!teacher_tiv.value) {
        console.log(teacher_tiv. value);
        teacher_tiv.style.borderBlockColor = "red"
        teacher_tiv.value = "Gri der cnndyan tiv@"

    }
    let teacher_tel = document.getElementById("tel");
    console.log(teacher_tel);


    if (!teacher_tel.value) {
        console.log(teacher_tel. value);
        teacher_tel.style.borderBlockColor = "red"
        teacher_tel.value = "Greq dzer heraxosahamar@"

    }
    let teacher_email = document.getElementById("email");
    console.log(teacher_email);
    


    if (!teacher_email.value) {
        console.log(teacher_email. value);
        teacher_email.style.borderBlockColor = "red"
        teacher_email.value = "Greq dzer gmail"

    }

}