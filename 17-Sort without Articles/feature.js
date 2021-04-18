const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function reArrange(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}

const sortBands = bands.sort(function(a,b){
    if(reArrange(a)> reArrange(b)){
        return 1;
    }
    else{
        return -1;
    }
})

document.querySelector('#brand').innerHTML = sortBands.
    map(band =>`<li>${band}</li>` ).join('');

console.log(sortBands)