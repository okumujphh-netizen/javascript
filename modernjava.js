const nums = [1,3,4];
const moreNums = [...nums,7,9];
console.log(moreNums)

const baseUser ={ name :"John doe"};
const userRole ={...baseUser, role:"Data scientist"};

console.log(userRole)

// spread syntax
//array
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
//objects
const player = {
    name: "Ben Gordon",
    points: 33
};

const updatedPlayer = {
    ...player,
    team: "Charlotte Hornets"
};

console.log(updatedPlayer);
//combining arrays
const homePlayers = ["Alan", "Brook"];
const awayPlayers = ["Ben", "Jeff"];

const allPlayers = [...homePlayers, ...awayPlayers];

console.log(allPlayers);
//rest
// reduce
function addNumbers(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

console.log(addNumbers(10, 20, 30));
//rest with normal parameters
function introduce(name, ...hobbies) {
    console.log(name);
    console.log(hobbies);
}

introduce("John", "Coding", "F1", "Gaming");



