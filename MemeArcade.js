document.getElementById('Generate').onclick = GenerateClick;

function GenerateClick(){
    document.getElementById('Weekday').style.display = 'block';   // show again after reset function : style.display = 'none'
    document.getElementById('Weekend').style.display = 'block';

    var x, y;
    // Get the value of the input field with id="Weekday" and "Weekend"
    x = document.getElementById('WeekdayInput').value;
    y = document.getElementById('WeekendInput').value;
    
    document.getElementById('Weekday').innerHTML = x;
    document.getElementById('Weekend').innerHTML = y;
} 

document.getElementById('Reset').onclick = function(){

    document.getElementById('WeekdayInput').value = "";
    document.getElementById('WeekendInput').value = "";

    document.getElementById('Weekday').style.display = 'none';
    document.getElementById('Weekend').style.display = 'none';
    document.getElementById('WeekdayInput').focus();
}

document.getElementById('Submit').onclick = function(){

    document.getElementById('Name').value = "";
    document.getElementById('Mail').value = "";
    document.getElementById('Phone').value = "";
    document.getElementById('textAre').value = "";

    document.getElementById('Name').focus();
}