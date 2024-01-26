let calculate = document.getElementsByClassName("calculate")[0];

calculate.onclick = () => {
    let fee = document.getElementById("fee");
    let total = document.getElementById("total");
    let resultContainer = document.querySelector(".result-container");

    let totalp = total.value;
    let feetotal = fee.value;

    // Check if both values are valid numbers
    if (isNaN(totalp) || isNaN(feetotal) || totalp <= 0 || feetotal <= 0) {
        resultContainer.innerHTML = "Please enter valid numbers for both fields.";
        return;
    }

    let ind_share = feetotal / totalp;
    resultContainer.innerHTML = `The individual share for each person would be ${ind_share}`;

    resultContainer.classList.add("show");
};

