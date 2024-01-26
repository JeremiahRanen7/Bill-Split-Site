let calculate = document.getElementsByClassName("calculate")[0]
calculate.onclick=()=>{
    let fee = document.getElementById("fee")
    let total = document.getElementById("total")
    let totalp = total.value
    let feetotal = fee.value
    ind_share = feetotal/totalp
    console.log(ind_share)
    document.querySelector(".form").innerHTML=`The Individual share for each person would be ${ind_share}`
}
