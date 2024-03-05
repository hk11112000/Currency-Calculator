const btn = document.getElementById("btn")
let baseCurr = document.getElementById("baseCurr").value
let conCurr = document.getElementById("conCurr").value
const apiKeyValue = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_UhMGDflsSl4ZNX3ghIun2EmKAf9WEXcsf9NDMPHK"
let baseC = document.querySelector(".baseC")   
const ans = document.getElementById("ans")
let data1

const  fetchCurrency=async()=>{
    const result = await fetch(apiKeyValue)
    const data = await result.json()
    const newData = data.data
    const baseCValue = baseC.value
    for(let key in newData){
        if(baseCurr === key){
            data1 = baseCValue / newData[key]
        }
        
    }
    for(let key in newData){
        if(conCurr === key){
            let result = data1 * newData[key]
            console.log(result)
            ans.innerText = `${baseCValue} ${baseCurr} = ${result.toFixed(3)} ${conCurr}`
        }
    }
    

}

const changeValue = ()=>{
     baseCurr = document.getElementById("baseCurr").value
     conCurr = document.getElementById("conCurr").value    
}

btn.addEventListener('click',fetchCurrency)