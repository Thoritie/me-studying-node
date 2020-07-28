// standard
// const square = function (x) {
//     return x * x
// }

// version 1
// const square = (x) => {
//     return x * x
// }

// version 2 if have single line we don't have to put return
// const square = (x) => x * x
//
// console.log(square(3))

// arrow function as property on obj

const event = {
    name: 'Birthday Party',
    guestList: ['Under', 'Pop', 'Thor'],
    printGuestList() {
        console.log('Guest for ....' + this.name )

        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}

event.printGuestList()
