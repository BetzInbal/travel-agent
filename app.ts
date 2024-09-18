const FLI_URL:string = "https://66e98a6387e417609449dfc5.mockapi.io/api/flights"
const PAS_URL:string = "https://66e98a6387e417609449dfc5.mockapi.io/api/pasangers"
const selsectElm : HTMLSelectElement = document.querySelector("select")!
const paslistElm:HTMLDivElement = document.querySelector(".paslist")!
const AGENT:string = "8435445"

interface Flight {
    date:string,
    from:string,
    to:string,
    id:string
}
interface Pasanger{
    createdAt:string,
    name:string,
    gender:string,
    flight_id:string,
    agent:string,
    id:string
}
console.log("flights")



async function getAllPasngers():Promise<Pasanger[]>
{
    const res:Response = await fetch(PAS_URL)
    const pasangers:Pasanger[] = await res.json()
    return pasangers
}


//function createFunc()

async function popleidList():Promise<void>{
    const pasangers:Pasanger[] = await getAllPasngers()
    //console.log(pasangers)
    for (const pasn of pasangers) {
        const pasDiv:HTMLDivElement = document.createElement("div")
        pasDiv.className = "pasdiv"
        const pname:HTMLParagraphElement = document.createElement("p")
        pname.textContent = `${pasn.name}`
        pasDiv.appendChild(pname)
        const pdate:HTMLParagraphElement = document.createElement("p")
        pdate.textContent = `${pasn.createdAt}`
        pasDiv.appendChild(pdate)
        //createFunc(pasDiv)
        paslistElm.appendChild(pasDiv)
    }
}


async function getFlights():Promise<Flight[]>
{
    const res:Response = await fetch(FLI_URL)
    const flights:Flight[] = await res.json()
    return flights
}

async function popleidSelect():Promise<void>{
    const flights:Flight[] = await getFlights()
    //console.log(flights)
    selsectElm.innerHTML = ""
    for (const flit of flights) {
        const op:HTMLOptionElement = document.createElement("option")
        op.value = flit.id
        op.textContent = `from: ${flit.from}, to: ${flit.from}, date: ${flit.date} `
        selsectElm.appendChild(op)
    }

}


popleidSelect();
popleidList()


