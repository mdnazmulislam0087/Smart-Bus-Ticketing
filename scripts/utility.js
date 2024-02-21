function getValue(id){
    const element = document.getElementById(id).innerText;
    const converted = parseInt(element);
    return converted;
}

function TotalCost(value){
    const totalCost = getValue("total-cost")
    const sum = totalCost + parseInt(value)
    document.getElementById("total-cost").innerText = sum ;
}

function grandTotal(something){
    if (something) {
        coupon =document.getElementById("apply-coupn").value;
        if (coupon === "NEW15") {
            const grandTotal = getValue("total-cost")*0.85
            document.getElementById("grand-total").innerText = grandTotal
        }
        else if (coupon === "Couple 20"){
            const grandTotal = getValue("total-cost")*0.80
            document.getElementById("grand-total").innerText = grandTotal
        }
        else {
            alert("Kindly enter a valid coupon code")
        }

    } else {
        const grandTotal = getValue("total-cost")
        document.getElementById("grand-total").innerText = grandTotal

    }

    

}