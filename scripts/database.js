const database = {
    drinks: [
        { 
            id: 1,
            name: "Coke",
            img: "../images/fk53061red-1.jpg",
            desc: "Yo this coke really be cokin' tho",
            price: 1.99
        },

        {
            id: 2,
            name: "Diet Coke",
            img: "../images/dietcoke.jpg",
            desc: "Yo this diet coke really be cokin' tho, but in a diet kinda way",
            price: 1.99
        },

        {
            id: 3,
            name: "Mountain Dew",
            img: "../images/mtndew.jpg",
            desc: "Yo you tellin' me this dew really be from a mountain? You bet your booty it is! Also its original catchphrase said it'll tickle your innards, so there's that too.",
            price: 1.99
        },

        {
            id: 4,
            name: "Bottled Water",
            img: "../images/bottlewater.jpg",
            desc: "Yo this water truly be bottled tho, marvel that the magic of science and engineering, how did we even get this water in there??? that's why it's $3",
            price: 2.99
        },

        {
            id: 5,
            name: "Hot Dog Water",
            img: "../images/hotdogwater.jpg",
            desc: "Listen, this tastes bad and is gross, but that doesn't mean we won't sell it as our most expensive drink. Come and get it ya lil freaks!!!",
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
