

const mobile_names = Object.keys(mobiles)
const result = mobile_names.map(mobile=>{
    let mob = mobiles[mobile]

    let desc = mob['href'].split('_')
    let memory = mob['Built-in'].split(',')

    return {
        imgs:mob['imgs'],
        brand: desc[0].substring(1),
        title: desc[1].split('-').join(' '),
        price: mob['price'],
        rating: 4.9,
        display: mob['Size'],
        displayTechnology: mob['Technology'],
        resolution: mob['Resolution'],
        platform: mob['OS'],
        processor: mob['CPU'],
        backCamera: mob['Main'],
        frontCamera: mob['Front'],
        storage: memory[0],
        memory: memory[1].trim(),
        technology: mob['Data'],
        battery: mob['Capacity'],
        weight: mob['Weight'],
        dimensions: mob['Dimensions'],
        colors: mob['Colors'],
        topFeature: "Apple's first 5G phone is perfect for smooth facetime calls"  
    }
})
console.log(result)
// var dictstring = JSON.stringify(result);
var fs = require('fs');
// fs.writeFile("./mobiles.json", dictstring);
fs.writeFileSync('./mobiles.json', JSON.stringify(result, null, 2) , 'utf-8');