"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const FLI_URL = "https://66e98a6387e417609449dfc5.mockapi.io/api/flights";
const PAS_URL = "https://66e98a6387e417609449dfc5.mockapi.io/api/pasangers";
const selsectElm = document.querySelector("select");
const paslistElm = document.querySelector(".paslist");
const AGENT = "8435445";
console.log("flights");
function getAllPasngers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(PAS_URL);
        const pasangers = yield res.json();
        return pasangers;
    });
}
//function createFunc()
function popleidList() {
    return __awaiter(this, void 0, void 0, function* () {
        const pasangers = yield getAllPasngers();
        //console.log(pasangers)
        for (const pasn of pasangers) {
            const pasDiv = document.createElement("div");
            pasDiv.className = "pasdiv";
            const pname = document.createElement("p");
            pname.textContent = `${pasn.name}`;
            pasDiv.appendChild(pname);
            const pdate = document.createElement("p");
            pdate.textContent = `${pasn.createdAt}`;
            pasDiv.appendChild(pdate);
            //createFunc(pasDiv)
            paslistElm.appendChild(pasDiv);
        }
    });
}
function getFlights() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(FLI_URL);
        const flights = yield res.json();
        return flights;
    });
}
function popleidSelect() {
    return __awaiter(this, void 0, void 0, function* () {
        const flights = yield getFlights();
        //console.log(flights)
        selsectElm.innerHTML = "";
        for (const flit of flights) {
            const op = document.createElement("option");
            op.value = flit.id;
            op.textContent = `from: ${flit.from}, to: ${flit.from}, date: ${flit.date} `;
            selsectElm.appendChild(op);
        }
    });
}
popleidSelect();
popleidList();
