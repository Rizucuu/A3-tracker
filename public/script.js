// change the display mode of the input form so it appears
function openForm () {
    document.getElementById('input').style.display = 'block';
    document.body.style.backgroundColor = 'rgb(0,0,0,0.5)';//add transparent background
}
//hide the input form and background color
function closeForm() {
    document.getElementById('input').style.display = 'none';
    document.body.style.backgroundColor = 'rgb(0,0,0,0)';
}