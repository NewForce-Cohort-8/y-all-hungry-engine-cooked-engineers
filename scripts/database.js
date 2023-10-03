const database = {
    transientState: {},
	locations: [
		{
			id: 1,
			name: "Main Street",
		},
		{
			id: 2,
			name: "Arena",
		},
		{
			id: 3,
			name: "Club Strip",
		},
		{
			id: 4,
			name: "Farmers Market",
		},
	],

	toys : [
        {id: 1, name:"Moon Shoes", img:"https://i.ebayimg.com/images/g/JM0AAOSwOGtgCuYu/s-l1600.jpg", price:10, desc:"Moon Shoes! They make you jump like you're on the moon!"},
    {id:2, name:"Gas-Powered Pogo Stick", img:"https://images-stag.jazelc.com/uploads/theautopian-m2en/hop-rod-topshot.jpg", price: 75, desc:"Ankle snapping pogo power!"},
    {id:3, name:"Portable Ouija Board", img:"https://www.baltimoremagazine.com/wp-content/uploads/2019/06/ouija-main-1000x600.jpg", price:2, desc:"For consulting demons on the go!" },
    {id:4, name:"Box O'Rocks", img:"https://thumbs.dreamstime.com/z/box-rocks-isolated-white-corrugated-cardboard-holds-several-colorful-small-rock-parcels-background-37986604.jpg?w=768", price:5, desc:"Definitely not from the parking lot!"},
    {id:5, name:"Hot Dawg Launcher", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Milkor_MGL.jpg/440px-Milkor_MGL.jpg", price:35, desc:"For eating Dawgs at a distance!"}
]
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
