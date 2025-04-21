const reloadButton = document.getElementById("reloadbutton");
const noteContainer = document.getElementById("specialnote");

const noDoublesButton = document.getElementById("nodoublesbutton");

const notes = [
    'Ily <3',
    'Ik this kinda random but you also have super cute puppies hehe',
    'Your hair is super pretty',
    'I love your style',
    'Your eyes are so like just divine, like like kinda like a dragon yk they just like mystical and just so pretty',
    'your baking is actuall so good btwwww ik I say this a lot but I never ever lie about it your baking is actually amazing your so talanted',
    'Also im so proud of u for locking in w school even tho its rlly hard good job',
    '<3',
    'Ooh its rlly cute that u wear the bracelet i got u heheh',
    'and I love the hairband u gave me hehe especiall the purple one',
    'Your voice is rlly cute and attractive btw heheh', 
    'Your literally so pretty and talented and smart and amazing and I love you so so much',
    'Your singing voice (and regular but i wrote abt that in another note) is sooooo amazinnggggg you actually sound like a godess',
    'I love when u bake me stuff hehe',
    'I rlly like ur legs heheh',
    'I love you so much and I love your body too but pelase dont ever think that I only love you for your body, I love you for you and your body is just a bonus',
    'I dont need half the things you do for me but u still do them and I love that it makes me feel loved - all the little things',
    'Getting random selfies of u is the best thing ever and literally makes my day',
    'When u call me handsome it makes me feel special',
    'I thought this might take a while when I started writing but it doesnt take long at all theres so much of you to love and talk about',
    'I love that you call me your boyfriend',
    'I always think abt u',
    'Im so glad u asked Keaton',
    'Im so glad i can call u mine and u can call me yours',
    'Your are geniunely the most beautiful girl in the whole wide world',
    'idk how I bagged u but I did and I love it',
    'I love that you love me',
    'Thank you for always being good to me',
    'Thank you for treating me so well',
    'your literally the bestest girlfriend ever',
    'I love when your happy',
    'It feels so comfy sitting next to (or on/under) you',
    'You have a really cute smile btwwwwww its super duper mega cute and I hope your smiling rn reading this',
    'This one maybe kinda weird but i dont think so - I like ur vampire fangs heheh',
    'ooooooooh I love when were cuddling and you like grab onto me kinda idk its rlly cute and special',
    'Its cute that u INSIST on being on my left side lol its adorable just like everything else u do',
    'Oooohohooohoohoohoh thank youuu for helping me shop and buy clothesssss (I rlly need the help *cry emoji*)',
    'You always smell amazing btw - like AMAZING its so good',
    'remember how ur mum got the little penguin with the sign? the little one - and u made it smell like u? - it still smells like u lol i smell it every night and its amazing',
    'ur also amazing at soccer btw u the bestererestest',
    'I hope this note makes u happy',
    'You can always come back to these notes if ur ever sad or anything I hope it makes u feel better',
    'Ur prolly the best thing thats ever happened to me',
    'Im so blessed to have you in my life',
    'Im literally the luckiest guy in the world to have you as my girlfriend',
    'I still havent eaten breakfast *cry emoji* dw ill have it after this - this is more importantttt',
    'Your so special to me',
    'You have a cute giggle heheheh',
    'oohohoho its rlly cute when u go geheheheh rlly softly like irl (and over text but seeing u in person is best)',
    'bru I forgot a thing - but on the topic of memory - Im glad that one of us has a good one *cry emoji* and thank u for reminding me w stufffffff',
    'I love that u try to get me to try new things (mostly fooooddd) (okay maybe im uncultured but not for long with you *salute emoji*)',
    'OOOohhhohohohohoohh It was so cute when u asked me to play games w my fam u sounded like my wife and I loved it so muchhhhhhhhh',
    'theres 52 notes rn btw until I add more'
];


const changeNote = () => {
    randomNum = Math.floor(Math.random() * notes.length);
    noteContainer.innerHTML = notes[randomNum];
}

const changeNoteNoDoubles = () => {
    randomNum = Math.floor(Math.random() * notes.length);
    noteContainer.innerHTML = notes[randomNum];
    notes.splice(randomNum, 1);
}

noDoublesButton.addEventListener("click", () => {
    reloadButton.removeEventListener("click", changeNote);
    reloadButton.addEventListener("click", changeNoteNoDoubles);
});



reloadButton.addEventListener("click", changeNote);