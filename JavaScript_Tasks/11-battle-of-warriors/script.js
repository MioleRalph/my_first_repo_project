function createWarrior(name, hp, strength) {
    return {
        name: name,
        hp: hp,
        strength: strength,
        // This function generates random attack damage based on warrior's strength
        attack: function() {
            return Math.floor(Math.random() * this.strength) + 1;
        }
    };
}

// Create warrior stats
const thor = createWarrior("Malphite", 100, 12);  // Tankier, lower damage
const zeus = createWarrior("Yasuo", 80, 25);   // Higher damage, lower HP


// This function simulates a turn-based battle between two warriors
function battle(warrior1, warrior2) {
    // Maximum 10 rounds of combat
    for (let round = 1; round <= 10; round++) {
        console.log(`========= Round ${round} =========`);

        // attacker is malpite and defender is yasuo.
        let attackDamage1 = warrior1.attack();
        warrior2.hp = Math.max(0, warrior2.hp - attackDamage1);

        // Log the attack and current HP of both warriors.
        console.log(`${warrior1.name} attacks ${warrior2.name} for ${attackDamage1} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}\n`);

        // Check for knockout after first attack
        if (warrior2.hp <= 0) {
            console.log(`${warrior1.name} wins by knockout!`);
            return;
        }

        // attacker is yasuo and defender is malpite.
        let attackDamage2 = warrior2.attack();
        warrior1.hp = Math.max(0, warrior1.hp - attackDamage2);

        // Log the attack and current HP of both warriors.
        console.log(`${warrior2.name} attacks ${warrior1.name} for ${attackDamage2} damage!`);
        console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}\n`);

        // Check for knockout after second attack
        if (warrior1.hp <= 0) {
            console.log(`${warrior2.name} wins by knockout!`);
            return;
        }
    }

    // Determine winner if both survive all rounds
    console.log("========= Final Results =========");
    if (warrior1.hp > warrior2.hp) {
        console.log(`${warrior1.name} wins with ${warrior1.hp} HP remaining.`);
    } else if (warrior2.hp > warrior1.hp) {
        console.log(`${warrior2.name} wins with ${warrior2.hp} HP remaining.`);
    } else {
        console.log("It's a draw!");
    }
}

// Initiate battle between warriors
battle(thor, zeus);