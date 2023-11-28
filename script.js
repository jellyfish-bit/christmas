const day = new Date().getDate();
console.info("Current Day: " + day)

for (let index = 0; index < 24; index++) {
    if(day < index+1) {
        document.getElementById("day" + (index+1)).disabled = true;
    }
}
