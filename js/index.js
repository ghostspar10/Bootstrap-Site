var featuredArray = ["Doom", "Uni", "Banshee", "Bloom", "World", "Sucker", "Fraulein", "Turtle"];

function featuredFunction() {
    var rand = featuredArray[Math.floor(Math.random() * featuredArray.length)];

    var element1 = document.getElementById('featured-text');
    var element2 = document.getElementById('featured-card');
    var element3 = document.getElementById('featured-pic');

    switch (rand) {
        case "Doom":
            element1.innerHTML = "One of my absolute favorite monsters in the game. Non-targeting banish is just plain fun.";
            element2.href = "https://yugioh.fandom.com/wiki/Doomking_Balerdroch";
            element2.innerHTML = "Doomking Balerdroch"
            element3.src = "images/doomking.png";
            break;
        case "Uni":
            element1.innerHTML = "The backbone of every zombie deck. Drawing him always means good times.";
            element2.href = "https://yugioh.fandom.com/wiki/Uni-Zombie";
            element2.innerHTML = "Uni-Zombie"
            element3.src = "images/unizombie.jpg"
            break;
        case "Banshee":
            element1.innerHTML = "Activating Zombie World straight from deck. Gets past a lot of negation.";
            element2.href = "https://yugioh.fandom.com/wiki/Necroworld_Banshee";
            element2.innerHTML = "Necroworld Banshee"
            element3.src = "images/banshee.png"
            break;
        case "Bloom":
            element1.innerHTML = "Instant Doomking, right to your field!";
            element2.href = "https://yugioh.fandom.com/wiki/Glow-Up_Bloom";
            element2.innerHTML = "Glow-Up Bloom"
            element3.src = "images/bloom.png"
            break;
        case "World":
            element1.innerHTML = "The classic Zombie field spell. Floodgate and Doomking enabler.";
            element2.href = "https://yugioh.fandom.com/wiki/Zombie_World";
            element2.innerHTML = "Zombie World"
            element3.src = "images/zombieworld.jpg";
            break;
        case "Sucker":
            element1.innerHTML = "Generic Link-2 with recursion shenanigans. Also a cute Vampire.";
            element2.href = "https://yugioh.fandom.com/wiki/Vampire_Sucker";
            element2.innerHTML = "Vampire Sucker"
            element3.src = "images/sucker.png";
            break;
        case "Fraulein":
            element1.innerHTML = "Zombie battle fader and free special summon. Very protective of others.";
            element2.href = "https://yugioh.fandom.com/wiki/Vampire_Fraulein";
            element2.innerHTML = "Vampire Fraulein"
            element3.src = "images/fraulein.png";
            break;
        case "Turtle":
            element1.innerHTML = "While not relevant nowadays, back in older formats, this guy floated out big, strong boys. A favorite of mine with Creature Swap.";
            element2.href = "https://yugioh.fandom.com/wiki/Pyramid_Turtle";
            element2.innerHTML = "Pyramid Turtle"
            element3.src = "images/turtle.png";
            break;
    }
}