const veggieBg = [
    './assets/background-1.jpg',
    './assets/background-2.jpg',
    './assets/background-3.jpg',
]

const veggieAssets = [
    "./assets/lettuce.png",
    "./assets/pechay.png",
    "./assets/mustasa.png",
]

const veggieTitle = [
    "Lettuce",
    "Pechay",
    "Mustasa"
]

const veggieDesc = [
    "It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.",
    "It can be prepared in a range of ways: stir-fried, steamed, stuffing, or boiled.",
    "This plant is an erect, branched, smooth annual, 0.4 to 1 meter high.",
]

$(document).ready(function(){
    
    veggieIndex = Math.floor(Math.random() * 3)
    $('#bgVeggie').css('background-image', `url('${veggieBg[veggieIndex]}')`)
    $('#veggiePic').attr('src', veggieAssets[veggieIndex])
    $('#veggieTitle').html(veggieTitle[veggieIndex])
    $('#veggieDesc').html(veggieDesc[veggieIndex])
})