const database = {
    iceCream: [
        { id: 1, name: "The Chonk Monk", img:"https://namelymarly.com/wp-content/uploads/2023/05/Chunky-Monkey-Nice-Cream-2004-sq-web.jpg", price: 8.50, description:"The Chunk Monk basically turns banana nutbread into an ice cream flavor and adds large chunks of dark chocolate to it, which makes it a sort of combination of banana nutbread and frozen chocolate banana flavors.",
        id: 2, name: "So Basic", img:"https://www.savoryexperiments.com/wp-content/uploads/2021/06/Vanilla-Ice-Cream-9.jpg", price: 6.00, description: "So Basic is a sweet frozen dessert made from milk, cream, sugar, and vanilla flavoring from vanilla seeds, pure vanilla extract, vanilla seed paste, or a combination.",
        id: 3, name: "Mocha Much?", img:"https://static01.nyt.com/images/2015/08/27/dining/mocha-ice-cream/mocha-ice-cream-articleLarge.jpg", price: 7.50, description: "This decadent homemade mocha ice cream recipe gets its rich flavor from brewed coffee and semisweet chocolate and its creaminess from an egg custard made with whipping cream and half-and-half.",
        id: 4, name: "Chocolate Thunder", img:"https://butteryourbiscuit.com/wp-content/uploads/2018/06/no-churn-chocolate-chunk-caramel-ice-cream-3.jpg", price: 7.00, description: "Chocolate Thunder ice cream is made with heavy whipping cream, unsweetened cocoa powder, sweetened condensed milk, vanilla, and chocolate chunks. ",
        id: 5, name: "Golden Girl", img:"https://icecreamfromscratch.com/wp-content/uploads/2022/04/Strawberry-Cheesecake-Ice-Cream-1.2-720x405.jpg", price: 8.50, description: " Golden Girl ice cream is creamy and sweet with that signature cheesy tang reminiscent of its divine pastry counterpart, cheesecake.",
        id: 6, name: "Deez Nuts", img:"https://i3.wp.com/lmld.org/wp-content/uploads/2011/10/Peanut-Butter-Ice-Cream-12.jpg", price: 8.50, description: "Deez Nuts features a peanut butter ice cream swirled with chocolatey waffle cone pieces and a fudge swirl.",
        id: 7, name: "Berry Bitty City", img:"https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg", price: 8.50, description: " Red, ripe, juicy strawberries churned and frozen with some fresh cream and a bit of sugar is all that is needed to make a delicious Berry Bitty City ice cream."}
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
