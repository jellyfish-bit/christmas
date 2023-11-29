const date = new Date();
const day = date.getDate();
const month = date.getMonth();
console.info("Current Day: " + day)
console.info("Current Month: " + month)

for (let index = 0; index < 24; index++) {
    if(day < index+1 && month !== 11) {
        document.getElementById("day" + (index+1)).disabled = true;
    }
}
