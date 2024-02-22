const allSeat = document.getElementsByClassName('seat');
// console.log(allSeat )
for (seat of allSeat){
    // console.log(seat)
    seat.addEventListener('click', function(event){
        clickedSeat= event.target;
        clickedSeat.classList.add("bg-green-500")
        clickedSeat.removeEventListener('click', arguments.callee);

        // console.log(clickedSeat.innerText)
        // get the selected seat
        seatNo = clickedSeat.innerText;

        // get the price of per seat

        const pricePerSeat = getValue("price-per-seat")
        // console.log(pricePerSeat)

        // Another part class of seat
        const seatClass = "Economy"

        console.log(seatNo,  seatClass, pricePerSeat)

        // Pushing things in the cart crating div
        const containerCard = document.getElementById("selected-seat-container")
        
        const div = document.createElement("div"); // create a new div

        const p1 = document.createElement("p") // create a new paragrapah
        const p2 = document.createElement("p") // create a new paragrapah
        const p3 = document.createElement("p") // create a new paragrapah

        p1.innerText = seatNo  // set the text
        p2.innerText = seatClass
        p3.innerText = pricePerSeat


        div.appendChild(p1) // appending one by one as combining not posssible
        div.appendChild (p2)
        div.appendChild(p3)

        // finally give it to container
        containerCard.appendChild(div)

        // add class flex and jusify around to div class
        div.classList.add("flex")
        div.classList.add("justify-around")


        TotalCost(pricePerSeat)
        grandTotal()

        
        
        // update the seat left
        const seatLeftCurrent = getValue("total_seat")
        console.log(seatLeftCurrent-1)
        document.getElementById("total_seat").innerText = seatLeftCurrent-1


        // updat the seat purchased;
        const seatPurchased = getValue("seat-selected")
        console.log(seatPurchased+1)
        document.getElementById("seat-selected").innerText = seatPurchased+1



        // Next button check

        
        document.getElementById("next").addEventListener("click",function(){
            const header = document.getElementById("header")
            header.classList.add('hidden')
            const main = document.getElementById("main")
            main.classList.add('hidden')
            const footer1 = document.getElementById("footer1")
            footer1.classList.add('hidden')
            const footer2 = document.getElementById("footer2")
            footer2.classList.add('hidden')
            const success1 = document.getElementById("success")
            success1.classList.remove('hidden')


        })





    } )  
}


