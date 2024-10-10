const elBotaoSim = document.getElementById("botaoSim");
const elBotaoNao = document.getElementById("botaoNao");
const elPergunta = document.getElementById("pergunta");
const elNumQuestion = document.getElementById("num-question");
const tree = ["mamiferos", "aves", "repteis", "peixes"];
const mamiferos = ["Gato", "Dog Selvagem", "Coelho", "Girafa", "Lontra", "Boto", "Foca", "Baleia Cachalote"];
const aves = ["Galinha", "Faisão", "Perdiz", "Avestruz", "Pato", "Garça", "Pardela", "Pelicano"]
const repteis = ["Lagarto", "Cobra", "Crocodilo", "Jacaré", "Iguana do Deserto", "Iguana Verde", "Tartaruga Verde", "Cágado"];
const peixes = ["Piranha", "Pirarucu", "Cavalo Marinho", "Peixe-lua", "Cação Anjo", "Tubarão Branco", "Raia Borboleta", "Raia Manta"];
let numQuestion = 1;
let currLayer = 0;
let currTree = 0;
let treeSelected = false;
let primeiraChamada = true;
let nodePath = [];


elBotaoSim.addEventListener("click", clicouSim);
elBotaoNao.addEventListener("click", clicouNao);

function clicouSim() {
    userRes = true;
    checkTree(userRes);
}

function clicouNao() {
    userRes = false;
    checkTree(userRes);
}

/* checkTree:
* verifica se uma árvore foi selecionada:
* caso sim, vai pra dentro dela.
* caso não, pergunta o usuário se ele quer a próxima árvore.
*/
function checkTree(userRes) {
    if (!treeSelected) {
        if (userRes == true) {
            treeSelected = true;
        } else {
            currTree++;
            if (tree[currTree] == tree[tree.length - 1]) {
                treeSelected = true;
            }
        }
    }
    if (treeSelected) {
        getNodeQuestion(tree[currTree], userRes);
    } else {
        updateTreeQuestion(tree[currTree]);
    }
}

function updateTreeQuestion(cTree) {
    switch (cTree) {
        // mamiferos já é a primeira pergunta
        case "aves":
            elNumQuestion.innerHTML = ++numQuestion;
            elPergunta.innerHTML = "ave";
            break;
        case "repteis":
            elNumQuestion.innerHTML = ++numQuestion;
            elPergunta.innerHTML = "réptil";
            break;
        // peixes não tem pergunta, é escolhido automaticamente após recusa das outras
        default:
            console.log(`Erro ao tentar atualizar a pergunta da árvore ${cTree}`);
            break;
    }
}

function getNodeQuestion(cTree, userRes) {
    switch (cTree) {
        case "mamiferos":
            treeMamiferos(userRes);
            break;
        case "aves":
            treeAves(userRes);
            break;
        case "repteis":
            treeRepteis(userRes);
            break;
        case "peixes":
            treePeixes(userRes);
            break;
        default:
            console.log(`Erro ao tentar acessar a árvore ${tree}`);
            break;
    }
}

function treeMamiferos(userRes) {
    currLayer++;
    if (currLayer < 4) {
        elNumQuestion.innerHTML = ++numQuestion;
    }
    switch (currLayer) {
        case 1:
            elPergunta.innerHTML = "terrestre";
            break;
        case 2:
            nodePath.push(userRes);
            if (nodePath[0]) {
                elPergunta.innerHTML = "carnivoro";
            } else {
                elPergunta.innerHTML = "de agua doce";
            }
            break;
        case 3:
            nodePath.push(userRes);
            if (nodePath[0]) {
                elPergunta.innerHTML = "doméstico";
            } else {
                elPergunta.innerHTML = "pequeno"; 
            }
            break;
        case 4:
            nodePath.push(userRes);
            getAnimal(tree[currTree]);
            break;
        default:
            console.log("Erro ao tentar atualizar a pergunta da árvore mamiferos");
    }
}

function treeAves(userRes) {
    currLayer++;
    if (currLayer < 4) {
        elNumQuestion.innerHTML = ++numQuestion;
    }
    switch (currLayer) {
        case 1:
            elPergunta.innerHTML = "terrestre";
            break;
        case 2:
            nodePath.push(userRes);
            if (nodePath[0]) {
                elPergunta.innerHTML = "voador";
            } else {
                elPergunta.innerHTML = "de agua doce";
            }
            break;
        case 3:
            nodePath.push(userRes);
            if (nodePath[0]) {
                if (nodePath[1]){
                    elPergunta.innerHTML = "doméstico";
                } else {
                    elPergunta.innerHTML = "pequeno";    
                }
            } else {
                elPergunta.innerHTML = "pequeno"; 
            }
            break;
        case 4:
            nodePath.push(userRes);
            getAnimal(tree[currTree]);
            break;
        default:
            console.log("Erro ao tentar atualizar a pergunta da árvore aves");
            break;
    }
}

function treeRepteis(userRes) {
    currLayer++;
    if (currLayer < 4) {
        elNumQuestion.innerHTML = ++numQuestion;
    }
    switch (currLayer) {
        case 1:
            elPergunta.innerHTML = "carnívoro";
            break;
        case 2:
            nodePath.push(userRes);
            elPergunta.innerHTML = "terrestre";
            break;
        case 3:
            nodePath.push(userRes);
            if (nodePath[0]) { // carnivoro
                if (nodePath[1]) { // terrestre
                    elPergunta.innerHTML = "tem patas";
                } else { // aquatico
                    elPergunta.innerHTML = "tem focinho estreito";
                }
            } else { // herbivoro
                if (nodePath[1]) { // terrestre
                    elPergunta.innerHTML = "pequeno"; 
                } else { // aquatico
                    elPergunta.innerHTML = "de água salgada"; 
                }
            }
            break;
        case 4:
            nodePath.push(userRes);
            getAnimal(tree[currTree]);
            break;
        default:
            console.log("Erro ao tentar atualizar a pergunta da árvore repteis");
            break;
    }
}

function treePeixes(userRes) {
    currLayer++;
    if (currLayer < 4) {
        elNumQuestion.innerHTML = ++numQuestion;
    }
    switch (currLayer) {
        case 1:
            elPergunta.innerHTML = "ósseo";
            break;
        case 2:
            nodePath.push(userRes);
            elPergunta.innerHTML = "carnívoro";
            break;
        case 3:
            nodePath.push(userRes);
            elPergunta.innerHTML = "pequeno";
            break;
        case 4:
            nodePath.push(userRes);
            getAnimal(tree[currTree]);
            break;
        default:
            console.log("Erro ao tentar atualizar a pergunta da árvore peixes");
            break;
    }
}

function getAnimal(cTree) {
    let animais = [];
    if (cTree == "mamiferos") {
        animais = mamiferos;
    } else if (cTree == "aves") {
        animais = aves;
    } else if (cTree == "repteis") {
        animais = repteis;
    } else { //peixes
        animais = peixes;
    }
    let inicio = 0;
    let fim = animais.length;
    for (i=0; fim-inicio != 1; i++) {
        if (!nodePath[i]) {
            inicio = (inicio + fim) / 2;
        } else {
            fim = (inicio + fim) / 2;
        }
    }
    localStorage.setItem('nodePath', JSON.stringify(nodePath));
    localStorage.setItem('tree', tree[currTree]);
    localStorage.setItem('resultado', animais[inicio]);
    window.location.href = "resultado.html";
}