const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    
    let result;
    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel*9/5)+32);
        return fahrenheit;
    }

    const FahToCel = (Fah) =>{
        let celcius = Math.round((Fah-32)*5/9);
        return celcius;
    }

    if(valueTemp=='cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`;
    }
    else{
        result = FahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celsius`;
    }

}