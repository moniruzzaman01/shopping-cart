function productNumberHandle(product, price, isIncrease) {
    const caseInput = document.getElementById(product + '-input')
    let caseNumber = parseInt(caseInput.value)
    if (isIncrease == true) {
        caseNumber = caseNumber + 1
    } else if (caseNumber > 0) {
        caseNumber = caseNumber - 1
    }
    caseInput.value = caseNumber
    const newAmount = price * caseNumber
    document.getElementById(product + '-amount').innerText = newAmount


    // set subtotal
    document.getElementById('subtotal').innerText=getSubTotal()

    // set tax
    const hell=document.getElementById('tax').innerText=getTax(getSubTotal())
    

    // get total
    const totalField = document.getElementById('total')
    const total = getTax(getSubTotal()) + getSubTotal()
    totalField.innerText = total

}

function getTax(totalAmount) {
    const taxRate = 10 //10% tax rate
    const tax = totalAmount * (taxRate / 100)
    return tax;
}

function getSubTotal() {
    const caseTotal = parseInt(document.getElementById('case-amount').innerText)
    const iphoneTotal = parseInt(document.getElementById('iphone-amount').innerText)
    const total = caseTotal + iphoneTotal
    return total
}


// case product's number and amount handle
document.getElementById('case-plus-btn').addEventListener('click', function () {
    productNumberHandle('case', 50, true);
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    productNumberHandle('case', 50, false);
})
// iphone product's number and amount handle
document.getElementById('iphone-plus-btn').addEventListener('click', function () {
    productNumberHandle('iphone', 1200, true);
})
document.getElementById('iphone-minus-btn').addEventListener('click', function () {
    productNumberHandle('iphone', 1200, false);
})


// document.getElementById('checkOut').addEventListener('click', function () {
//     // set subtotal
//     const subTotalField = document.getElementById('subtotal')
//     const subTotal = getSubTotal()
//     subTotalField.innerText = subTotal
//     // set tax
//     const taxField = document.getElementById('tax')
//     const tax = getTax(getSubTotal())
//     taxField.innerText = tax

//     // get total
//     const totalField = document.getElementById('total')
//     const total = tax + getSubTotal()
//     totalField.innerText = total
// })