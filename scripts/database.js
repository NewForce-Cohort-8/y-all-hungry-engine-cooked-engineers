const database = {
    drinks: [
        { 
            id: 1,
            name: "Coke",
            img: "",
            price: 1.99
        },

        {
            id: 2,
            name: "Diet Coke",
            img: "",
            price: 1.99
        },

        {
            id: 3,
            name: "Mountin Dew",
            img: "",
            price: 1.99
        },

        {
            id: 4,
            name: "Bottled Water",
            img: "",
            price: 2.99
        },

        {
            id: 5,
            name: "Hot Dog Water (We'll Pour It Directly In Your Mouth)",
            img: "",
            price: 3.99
        }
],
    transientState: {}
}

export const setLocation = (locationId) => {
    database.transientState.selectedLocation = locationId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getLocations = () => {
    return database.getLocations.map(f => ({...f}))
}

export const completeOrder = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}
