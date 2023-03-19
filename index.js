
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    let color = document.getElementById('color').value.replace('#', '')
    const mode = document.getElementById('mode').value
    
fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colorArray = data.colors;
        let colorHtml = ''
        let hexHtml = ''

        for(let i = 0; i < colorArray.length; i++){
            colorHtml += 
            `
            <div class="color${i + 1}" style="background-color:${colorArray[i].hex.value};"></div>
            `
            hexHtml +=
            `
            <div id="hex${i + 1}" class="hex">${colorArray[i].hex.value}</div>
            `
        }
         document.getElementById('color-container').innerHTML = colorHtml;
         document.getElementById('hex-label-container').innerHTML = hexHtml;
    })
})


document.getElementById('hex-label-container').addEventListener('click', function(e){
const color = document.getElementById(e.target.id).textContent
console.log(color)
navigator.clipboard.writeText(color)
alert(`Copied the color: ${color}`)
})