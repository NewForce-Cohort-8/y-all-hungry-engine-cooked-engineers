const database = {
    transientState: {},

    toys : [
        {id: 1, name:"Moon Shoes", img:"", price:10, desc:"Moon Shoes! They make you jump like you're on the moon!"},
    {id:2, name:"Gas-Powered Pogo Stick", img:"", price: 75, desc:"Ankle snapping pogo power!"},
    {id:3, name:"Portable Ouija Board", img:"", price:2, desc:"For consulting demons on the go!" },
    {id:4, name:"Box O'Rocks", img:"", price:5, desc:"Definitely not from the parking lot!"},
    {id:5, name:"Hot Dawg Launcher", img:"", price:35, desc:"For eating Dawgs at a distance!"}
]
}
export const getToys = () => {
    return database.getToys.map(f => ({...f}))
}


export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.getLocations.map(toy => ({...toy}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
