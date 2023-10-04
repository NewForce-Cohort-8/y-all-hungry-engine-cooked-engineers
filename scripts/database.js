export const database = {
	transientState: {},
	locationFood: [],
	locationIceCream: [],
    locationDrinks: [],

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
  
	food: [
		{
			id: 1,
			name: "The HOT DAWG!",
			img: "https://amandascookin.com/wp-content/uploads/2017/03/Oven-Chili-Dogs-680.jpg",
			price: 9,
			desc: "Now say WHAT?! A flame-grilled quarter-pound beef frank nestled up in a toasted potato bun smothered in a Carolina Reaper Jam and topped with our famous 5 Alarm Chili and deep fried Ghost Pepper batons, all under a slab of melted pepper-jack cheese and chopped scallions. This puppy is going to have you screaming for more.",
		},
		{
			id: 2,
			name: "The Gretchen Weiners",
			img: "https://images.lecker.de/gefullte-hot-dog-rolle,id=618e8deb,b=lecker,w=980,rm=sk.webp",
			price: 12,
			desc: "So big it's full of secrets! Two quarter-pound kosher all beef franks rolled in a puff pastry strudel and stuffed with with roasted tomato relish that's been slow roasted with diced bell peppers and garlic. Deep fried and drizzled in a creamy aquafaba cracked pepper and sea salt aoili, this Dawg will satisfy the Mean Girl in us all. KOSHER DAIRY-FREE",
		},
		{
			id: 3,
			name: "B*tch I'm From Chicago",
			img: "https://www.kingsford.com/wp-content/uploads/2023/05/Chicago-Style-Char-Dogs-55_cc1_00000000_desktop2x.jpg",
			price: 8,
			desc: "If it ain't broke, don't fix it. This traditional Chicago style char-dog features a quarter-pound of flame grilled all beef frank on a poppy seed bun topped with yellow mustard, chopped white onions, sweet pickle relish, a dill pickle spear, tomato slices, pickled sport peppers, and finally a dash of celery salt. A deep dish for the bear in you. DAIRY FREE",
		},
		{
			id: 4,
			name: "The Big Loafer",
			img: "https://www.rachaelrayshow.com/sites/default/files/styles/1100x620/public/images/2015-04/b4fda13184e80a58eb1388a0847dfbd5.jpg?itok=2PQaCbbU",
			price: 10,
			desc: "Take a load off with a quarter-pound flame grilled all beef frank nestled on a toasted buttermilk bun and smothered with our 5-Alarm Chili and our house-made red-cabbage and apple slaw featuring a apple-cider vinaigrette aoili with diced red onion.",
		},
		{
			id: 5,
			name: "Hot Schnitz",
			img: "https://jesspryles.com/wp-content/uploads/2016/05/beer-cheese-hot-dogs-8-2-1024x683.jpg",
			price: 10,
			desc: "Oh ja! Gnosh down this quarter-pound flame grilled beef frank on a sea salt pretzel roll and topped with a caramilized onion and bacon chutney tossed in our stone ground honey mustard and doused in our Moutain State Almost Heaven Blonde Ale white cheddar and gruyere beer cheese and finished with diced scallions.",
		},
		{
			id: 6,
			name: "git push Dawg",
			img: "https://www.milram-food-service.de/system/files/media/images/recipe/veganer-falafel-hot-dog--48186.jpg",
			price: 8,
			desc: "You tech bruh? Our house-made quarter-pound falafel on a poppy seed bun coasted in Vegan gouda and topped with an apple cider vinaigrette simmered cucumber, white onion, and grilled corn relish, drizzled with a chili lime aquafaba aioli, and pickled red cabbage. git merge appetite Dawg. VEGAN",
		},
		{
			id: 7,
			name: "The Baby Dawg",
			img: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/19/16897768405891.jpg",
			price: 5,
			desc: "For the pups! A traditional beef-frank hot dog, on a regular bun topped with homemade Amish paste tomato catchup and yellow mustard. DAIRY FREE",
		},
		{
			id: 8,
			name: "None",
			img: "",
			price: 0,
			desc: "",
		},
	],
	iceCream: [
		{
			id: 1,
			name: "The Chonk Monk",
			img: "https://namelymarly.com/wp-content/uploads/2023/05/Chunky-Monkey-Nice-Cream-2004-sq-web.jpg",
			price: 8.5,
			description:
				"The Chunk Monk basically turns banana nutbread into an ice cream flavor and adds large chunks of dark chocolate to it, which makes it a sort of combination of banana nutbread and frozen chocolate banana flavors.",
		},
		{
			id: 2,
			name: "So Basic",
			img: "https://www.savoryexperiments.com/wp-content/uploads/2021/06/Vanilla-Ice-Cream-9.jpg",
			price: 6.0,
			description:
				"So Basic is a sweet frozen dessert made from milk, cream, sugar, and vanilla flavoring from vanilla seeds, pure vanilla extract, vanilla seed paste, or a combination.",
		},
		{
			id: 3,
			name: "Mocha Much?",
			img: "https://static01.nyt.com/images/2015/08/27/dining/mocha-ice-cream/mocha-ice-cream-articleLarge.jpg",
			price: 7.5,
			description:
				"This decadent homemade mocha ice cream recipe gets its rich flavor from brewed coffee and semisweet chocolate and its creaminess from an egg custard made with whipping cream and half-and-half.",
		},
		{
			id: 4,
			name: "Chocolate Thunder",
			img: "https://butteryourbiscuit.com/wp-content/uploads/2018/06/no-churn-chocolate-chunk-caramel-ice-cream-3.jpg",
			price: 7.0,
			description:
				"Chocolate Thunder ice cream is made with heavy whipping cream, unsweetened cocoa powder, sweetened condensed milk, vanilla, and chocolate chunks. ",
		},
		{
			id: 5,
			name: "Golden Girl",
			img: "https://icecreamfromscratch.com/wp-content/uploads/2022/04/Strawberry-Cheesecake-Ice-Cream-1.2-720x405.jpg",
			price: 8.5,
			description:
				" Golden Girl ice cream is creamy and sweet with that signature cheesy tang reminiscent of its divine pastry counterpart, cheesecake.",
		},
		{
			id: 6,
			name: "Deez Nuts",
			img: "https://i3.wp.com/lmld.org/wp-content/uploads/2011/10/Peanut-Butter-Ice-Cream-12.jpg",
			price: 8.5,
			description:
				"Deez Nuts features a peanut butter ice cream swirled with chocolatey waffle cone pieces and a fudge swirl.",
		},
		{
			id: 7,
			name: "Berry Bitty City",
			img: "https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg",
			price: 8.5,
			description:
				" Red, ripe, juicy strawberries churned and frozen with some fresh cream and a bit of sugar is all that is needed to make a delicious Berry Bitty City ice cream.",
		},
		{ id: 8, name: "None", img: "", price: 0.0, description: "none" },
	],

	drinks: [
		{
			id: 1,
			name: "Coke",
			img: "../images/fk53061red-1.jpg",
			desc: "Yo this coke really be cokin' tho",
			price: 1.99,
		},

		{
			id: 2,
			name: "Diet Coke",
			img: "../images/dietcoke.jpg",
			desc: "Yo this diet coke really be cokin' tho, but in a diet kinda way",
			price: 1.99,
		},

		{
			id: 3,
			name: "Mountain Dew",
			img: "../images/mtndew.jpg",
			desc: "Yo you tellin' me this dew really be from a mountain? You bet your booty it is! Also its original catchphrase said it'll tickle your innards, so there's that too.",
			price: 1.99,
		},

		{
			id: 4,
			name: "Bottled Water",
			img: "../images/bottlewater.jpg",
			desc: "Yo this water truly be bottled tho, marvel that the magic of science and engineering, how did we even get this water in there??? that's why it's $3",
			price: 2.99,
		},

        {
            id: 5,
            name: "Hot Dog Water",
            img: "../images/hotdogwater.jpg",
            desc: "Listen, this tastes bad and is gross, but that doesn't mean we won't sell it as our most expensive drink. Come and get it ya lil freaks!!!",
            price: 3.99
        },

        {
            id: 6,
            name: "None",
            img: "",
            desc: "Literally nothing to drink? OK psycho. It's free but still.",
            price: 0
        }
],
toys : [
    {id: 1, name:"Moon Shoes", img:"https://i.ebayimg.com/images/g/JM0AAOSwOGtgCuYu/s-l1600.jpg", price:10, desc:"Moon Shoes! They make you jump like you're on the moon!"},
    {id:2, name:"Gas-Powered Pogo Stick", img:"https://images-stag.jazelc.com/uploads/theautopian-m2en/hop-rod-topshot.jpg", price: 75, desc:"Ankle snapping pogo power!"},
    {id:3, name:"Portable Ouija Board", img:"https://www.baltimoremagazine.com/wp-content/uploads/2019/06/ouija-main-1000x600.jpg", price:2, desc:"For consulting demons on the go!" },
    {id:4, name:"Box O'Rocks", img:"https://thumbs.dreamstime.com/z/box-rocks-isolated-white-corrugated-cardboard-holds-several-colorful-small-rock-parcels-background-37986604.jpg?w=768", price:5, desc:"Definitely not from the parking lot!"},
    {id:5, name:"Hot Dawg Launcher", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Milkor_MGL.jpg/440px-Milkor_MGL.jpg", price:35, desc:"For eating Dawgs at a distance!"},
    {id:6, name:"none", img:"", price:0, desc:"I guess you were bad"}
]
   
}

