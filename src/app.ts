// 1. Model de dades (Interface)
interface Equip {
    nom: string;
    partitsjugats: number;
    punts: number;
    golsf: number;
    golsc: number;
}

let equip : Equip;
let llistaEquips: Equip[] = [
    {
        "nom": "Barça",
        "punts": 27,
        "golsf": 40,
        "golsc": 11,
        "partitsjugats": 10
    },
    {
        "nom": "Atlètic de Madrid",
        "punts": 25,
        "golsf": 20,
        "golsc": 8,
        "partitsjugats": 10
    },
    {
        "nom": "Real Madrid",
        "punts": 24,
        "golsf": 25,
        "golsc": 10,
        "partitsjugats": 10
    },
    {
        "nom": "Real Betis",
        "punts": 20,
        "golsf": 16,
        "golsc": 14,
        "partitsjugats": 10
    },
    {
        "nom": "Real Sociedad",
        "punts": 19,
        "golsf": 19,
        "golsc": 18,
        "partitsjugats": 10
    },
    {
        "nom": "Sevilla FC",
        "punts": 17,
        "golsf": 16,
        "golsc": 16,
        "partitsjugats": 10
    },
    {
        "nom": "Alavés",
        "punts": 12,
        "golsf": 14,
        "golsc": 11,
        "partitsjugats": 10
    },
    {
        "nom": "Athletic Bilbao",
        "punts": 12,
        "golsf": 12,
        "golsc": 9,
        "partitsjugats": 9
    },
    {
        "nom": "Celta",
        "punts": 12,
        "golsf": 10,
        "golsc": 7,
        "partitsjugats": 10
    },
    {
        "nom": "Villa Real",
        "punts": 12,
        "golsf": 15,
        "golsc": 14,
        "partitsjugats": 10
    },
    {
        "nom": "Depor",
        "punts": 11,
        "golsf": 13,
        "golsc": 13,
        "partitsjugats": 10
    },
    {
        "nom": "Osasuna",
        "punts": 11,
        "golsf": 10,
        "golsc": 18,
        "partitsjugats": 10
    },
    {
        "nom": "Racing",
        "punts": 11,
        "golsf": 15,
        "golsc": 26,
        "partitsjugats": 10
    },
    {
        "nom": "Levante",
        "punts": 10,
        "golsf": 16,
        "golsc": 19,
        "partitsjugats": 10
    },
    {
        "nom": "Elche",
        "punts": 10,
        "golsf": 14,
        "golsc": 17,
        "partitsjugats": 10
    },
    {
        "nom": "Rayo Vallecano",
        "punts": 9,
        "golsf": 12,
        "golsc": 20,
        "partitsjugats": 9
    },
    {
        "nom": "Getafe",
        "punts": 9,
        "golsf": 5,
        "golsc": 15,
        "partitsjugats": 10
    },
    {
        "nom": "Espanyol",
        "punts": 8,
        "golsf": 12,
        "golsc": 14,
        "partitsjugats": 10
    },

]
// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {

    if(llistaEquips.length <20){
        const inputNom = document.getElementById('iNom') as HTMLInputElement;
        const inputPunts = document.getElementById('iPunts') as HTMLInputElement;
        const inputGolsf = document.getElementById('iGolsf') as HTMLInputElement;
        const inputGolsc = document.getElementById('iGolsc') as HTMLInputElement;
        const inputPartitsJ = document.getElementById('iPartitsJ') as HTMLInputElement;

        equip = {
            nom: inputNom.value,
            punts:parseFloat(inputPunts.value),
            golsf:parseFloat(inputGolsf.value),
            golsc:parseFloat(inputGolsc.value),
            partitsjugats:parseFloat(inputPartitsJ.value),
        }

        llistaEquips.push(equip)
        console.table(llistaEquips);
        // Actualitzar la pantalla

    }
    if(llistaEquips.length == 20){
        //@ts-ignore
        document.getElementById('btnAfegir').hidden = true;
    }

    actualitzarUI();

}


// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {

    const contenidor = document.getElementById('contenidorEquips') as HTMLElement;
    const contenidor2 = document.getElementById('contenidorEquips2') as HTMLElement;

    let html:string;
    let html2:string;
    html=''
    html2=''

    for (let i = 0; i < llistaEquips.length; i++) {
        if (i<4){
            html += '<div class=\'primeraCol Champions\'>';
            html += '<h2>' + llistaEquips[i].nom + '</h2>'
            html += '<h3>' + llistaEquips[i].partitsjugats + '</h3>'
            html += '<h3>' + llistaEquips[i].punts + '</h3>'
            let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

            html += '<h3>' + gols + '</h3>'
            html += '<\/div>'

        }else if(i == 4){
                html += '<div class=\'primeraCol EuropaLeage\'>'
                html += '<h2>' + llistaEquips[i].nom + '</h2>'
                html += '<h3>' + llistaEquips[i].partitsjugats + '</h3>'
                html += '<h3>' + llistaEquips[i].punts + '</h3>'
                let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

                html += '<h3>' + gols + '</h3>'
                html += '<\/div>'
        }else if(i == 5) {
            html += '<div class=\'primeraCol ConferenceLeage\'>'
            html += '<h2>' + llistaEquips[i].nom + '</h2>'
            html += '<h3>' + llistaEquips[i].partitsjugats + '</h3>'
            html += '<h3>' + llistaEquips[i].punts + '</h3>'
            let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

            html += '<h3>' + gols + '</h3>'
            html += '<\/div>'
        }else if(i<10){
            html += '<div class=\'primeraCol Normal\'>'
            html += '<h2>' + llistaEquips[i].nom + '</h2>'
            html += '<h3>' + llistaEquips[i].partitsjugats + '</h3>'
            html += '<h3>' + llistaEquips[i].punts + '</h3>'
            let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

            html += '<h3>' + gols + '</h3>'
            html += '<\/div>'
        }else if(i<17){
            html2+='<div class=\'segonaCol Normal\'>'
            html2+='<h2>'+llistaEquips[i].nom+'</h2>'
            html2+='<h3>'+llistaEquips[i].partitsjugats+'</h3>'
            html2+='<h3>'+llistaEquips[i].punts+'</h3>'
            let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

            html2 += '<h3>'+gols+ '</h3>'
            html2+='<\/div>'
        }else{
            html2+='<div class=\'segonaCol aSegundaTah\'>'
            html2+='<h2>'+llistaEquips[i].nom+'</h2>'
            html2+='<h3>'+llistaEquips[i].partitsjugats+'</h3>'
            html2+='<h3>'+llistaEquips[i].punts+'</h3>'
            let gols = llistaEquips[i].golsf - llistaEquips[i].golsc

            html2 += '<h3>'+gols+ '</h3>'
            html2+='<\/div>'}
        contenidor2.innerHTML= html2;

    }
    contenidor.innerHTML= html;

}
// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
    actualitzarUI();
});

function OrdenarPTS(){
    llistaEquips.sort((a, b) => b.punts - a.punts);
    actualitzarUI()
}

function OrdenarGOLS(){
    llistaEquips.sort((a, b) => b.golsf - a.golsf);
    actualitzarUI()
}




































