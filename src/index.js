module.exports = function toReadable (number) {
    let readable = '';

    if (number === 0) {
        return getReadableFromZeroToNine(number);
    }

    if (number >= 100) {
        let hundred = Math.trunc(number / 100);
        readable += `${getReadableFromZeroToNine(hundred)} hundred `
        
        number = number % 100;
    }

    if (number >= 20) {
        readable += `${getReadableFromTwentyToHundred(number)} `;
    } else if (number >= 10) {
        readable += `${getReadableFromTenToTwenty(number)} `;
    } else if (number > 0) {
        readable += `${getReadableFromZeroToNine(number)} `;
    }
    
    
    return readable.trim();
}

function getReadableFromTwentyToHundred(number) {

    let ten = Math.trunc(number / 10) * 10;
    let readable = '';
    number = number % 10;
    
    switch (ten) {
        case 20:
            readable = 'twenty ';
            break;
        case 30:
            readable = 'thirty ';
            break;
        case 40:
            readable = 'forty ';
            break;
        case 50:
            readable = 'fifty ';
            break;
        case 60:
            readable = 'sixty ';
            break;
        case 70:
            readable = 'seventy ';
            break;
        case 80:
            readable = 'eighty ';
            break;
        case 90:
            readable = 'ninety ';
            break;
    }

    if (number > 0) {
        readable += getReadableFromZeroToNine(number);
    }

    return readable;
}

function getReadableFromTenToTwenty(number) {
    switch(number) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
    }
}

function getReadableFromZeroToNine(number) {
    switch(number) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 0:
            return 'zero';
    }
}