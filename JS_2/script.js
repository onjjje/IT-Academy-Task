var countrysH = {};

function inputСountryName() {
    var countryName = prompt('ввод информации о стране:');
    var capitalName = prompt('столица этой страны:');
    addCountry(countryName, capitalName);
}

function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}

function getСountryName() {
    var countryName = prompt('Какая страна вас интресует?');
    getCountryInfo(countryName);
    alert(getCountryInfo(countryName));
}

function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}

function getCounrtyList() {
    var res = "";
    for (key in countrysH)
        res += '\n' + getCountryInfo(key);
    console.log("список стран:" + res);
}

function deleteCountryName() {
    var countryName = prompt('Какую страну нужно удалить?');
    deleteCountry(countryName);
}

function deleteCountry(countryName) {
    delete countrysH[countryName];
}