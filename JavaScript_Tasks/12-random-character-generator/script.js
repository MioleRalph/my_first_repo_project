// 1. Create a Character Object
let character = {name: "Hero", health: 100};
  
// 2. Add a Random Class
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];
    
// 3. Add Randomized Health
character.randomizeHealth = function () {
    this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
};
    
// 4. Assign a Special Ability
const specialAbilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = specialAbilities[Math.floor(Math.random() * specialAbilities.length)];
    
// 5. Create a generateCharacter() Function
function generateCharacter(name) {
    // here we can use the provided name.
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

    const newCharacter = {
        name: name || names[Math.floor(Math.random() * names.length)],
        class: classes[Math.floor(Math.random() * classes.length)],
        health: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
        specialAbility: specialAbilities[Math.floor(Math.random() * specialAbilities.length)]
    };
  
    newCharacter.randomizeHealth = function () {
        this.health = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    };
  
    newCharacter.battle = function (otherCharacter) {
        // Damage is a random value between 5 and 20
        const damage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        const initialHealth = otherCharacter.health;
        otherCharacter.health -= damage;

        // display the battle outcome
        console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${initialHealth} to ${otherCharacter.health}.`);
    };
    return newCharacter;
}
  
// Example usage of generateCharacter
const character1 = generateCharacter();
console.log(character1);
    
const character2 = generateCharacter("Alice");
console.log(character2);
    
// 6. Battle Simulation
character1.battle(character2);
console.log(character1);
console.log(character2);
  
// 7. Generate Multiple Characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}
    
const characterArray = generateMultipleCharacters(4);
console.log(characterArray);
