const elResp1 = document.getElementById("resp1");
const elResp2 = document.getElementById("resp2");
const elResp3 = document.getElementById("resp3");
const elResp4 = document.getElementById("resp4");
const elNome = document.getElementById("nome");
const elImage = document.getElementById("img-animal")

const resultado = localStorage.getItem("resultado");
const nodePath = JSON.parse(localStorage.getItem("nodePath"));
const tree = localStorage.getItem("tree");
let imageName = resultado.toLowerCase();

switch (tree) {
    case "mamiferos":
        elResp1.innerHTML = "Mamífero";
        if (nodePath[0]) {
            elResp2.innerHTML = "Terrestre";
            if (nodePath[1]) {
                elResp3.innerHTML = "Carnívoro";
            } else {
                elResp3.innerHTML = "Herbívoro";
            }
            if (nodePath[2]) {
                elResp4.innerHTML = "Doméstico";
            } else {
                elResp4.innerHTML = "Selvagem";
            }
        } else {
            elResp2.innerHTML = "Aquático";
            if (nodePath[1]) {
                elResp3.innerHTML = "Água Doce";
            } else {
                elResp3.innerHTML = "Água Salgada";
            }
            if (nodePath[2]) {
                elResp4.innerHTML = "Pequeno";
            } else {
                elResp4.innerHTML = "Grande";
            }
        }
        break;
    case "aves":
        elResp1.innerHTML = "Ave";
        if (nodePath[0]) {
            elResp2.innerHTML = "Terrestre";
            if (nodePath[1]) {
                elResp3.innerHTML = "Voador";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Doméstico";
                } else {
                    elResp4.innerHTML = "Selvagem";
                }
            } else {
                elResp3.innerHTML = "Não Voador";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Pequeno";
                } else {
                    elResp4.innerHTML = "Grande";
                }
            }
        } else {
            elResp2.innerHTML = "Aquático";
            if (nodePath[1]) {
                elResp3.innerHTML = "Água Doce";
            } else {
                elResp3.innerHTML = "Água Salgada";
            }
            if (nodePath[2]) {
                elResp4.innerHTML = "Pequeno";
            } else {
                elResp4.innerHTML = "Grande";
            }
        }
        break;
    case "repteis":
        elResp1.innerHTML = "Réptil";
        if (nodePath[0]) {
            elResp2.innerHTML = "Carnívoro";
            if (nodePath[1]) {
                elResp3.innerHTML = "Terrestre";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Tem Patas";
                } else {
                    elResp4.innerHTML = "Sem Patas";
                }
            } else {
                elResp3.innerHTML = "Aquático";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Focinho Estreito";
                } else {
                    elResp4.innerHTML = "Focinho Arredondado";
                }
            }
        } else {
            elResp2.innerHTML = "Herbívoro";
            if (nodePath[1]) {
                elResp3.innerHTML = "Terrestre";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Pequeno";
                } else {
                    elResp4.innerHTML = "Grande";
                }
            } else {
                elResp3.innerHTML = "Aquático";
                if (nodePath[2]) {
                    elResp4.innerHTML = "Água Salgada";
                } else {
                    elResp4.innerHTML = "Água Doce";
                }
            }
        }
        break;
    case "peixes":
        elResp1.innerHTML = "Peixe";
        if (nodePath[0]) {
            elResp2.innerHTML = "Ósseo";
        } else {
            elResp2.innerHTML = "Cartilagem";
        }
        if (nodePath[1]) {
            elResp3.innerHTML = "Carnívoro";
        } else {
            elResp3.innerHTML = "Herbívoro";
        }
        if (nodePath[2]) {
            elResp4.innerHTML = "Pequeno";
        } else {
            elResp4.innerHTML = "Grande";
        }
        break;
    default:
        console.log(`Erro ao tentar acessar a árvore ${tree}`);
        break;
}



elNome.innerHTML = resultado;
elImage.src = `midia/animais/${imageName}.png`
if (resultado == "Dog Selvagem") {
    elImage.src = "midia/animais/dog.gif"
}

/* Pra imagem funcionar, o arquivo da imagem tem que ter os nomes abaixo em letra minuscula (acentos, ç e til permanecem)

O nomes dos animais estão representados dessa forma:

 const mamiferos = ["Gato", "Onça", "Coelho", "Girafa", "Lontra", "Boto", "Foca", "Baleia Cachalote"];
 
const aves = ["Galinha", "Faisão", "Perdiz", "Avestruz", "Pato", "Garça", "Pardela", "Pelicano"]

const repteis = ["Lagarto", "Cobra", "Crocodilo", "Jacaré", "Iguana do Deserto", "Iguana Verde", "Tartaruga Verde", "Cágado"];

const peixes = ["Piranha", "Pirarucu", "Cavalo Marinho", "Peixe-lua", "Cação Anjo", "Tubarão Branco", "Raia Borboleta", "Raia Manta"];

*/