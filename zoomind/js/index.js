// const botaoSim = document.getElementById("botaoSim");
// const botaoNao = document.getElementById("botaoNao");

// botaoSim.addEventListener("click", function() {
//     respostaUsuario(true);
//     document.getElementById("resposta").innerHTML = "Você escolheu o mamífero!";
// });

// botaoNao.addEventListener("click", function() {
//     respostaUsuario(false);
// });

// function getTree() {
//     if (mamifero) {
//         return mamiferos();
//     }
//     if (repteis) {
//         return repteis();
//     }
//     if (aves) {
//         return aves();
//     }
//     if (peixes) {
//         return peixes();
//     }
// }

// function mamiferos() {
//     if (terrestre) {
//         if (carnivoro) {
//             if (domestico) {
//                 return "Gato";
//             } else {
//                 // selvagem
//                 return "Onça";
//             }
//         } else {
//             // herbivoro
//             if (domestico) {
//                 return "Coelho";
//             } else {
//                 // selvagem
//                 return "Girafa";
//             }
//         }
//     } else {
//         // aquatico
//         if (agua_doce) {
//             if (pequeno) {
//                 return "Lontra";
//             } else {
//                 // grande
//                 return "Boto";
//             }
//         } else {
//             // agua salgada
//             if (pequeno) {
//                 return "Foca";
//             } else {
//                 // grande
//                 return "Baleia Cachalote";
//             }
//         }
//     }
// }

// function aves() {
//     if (terrestre) {
//         if (voador) {
//             if (domestico) {
//                 return "Galinha";
//             } else {
//                 return "Faisão";
//             }
//         } else {
//             // nao voador
//             if (pequeno_porte) {
//                 return "Perdiz";
//             } else {
//                 // grande porte
//                 return "Avestruz";
//             }
//         }
//     } else {
//         // aquático
//         if (agua_doce) {
//             if (pequeno_porte) {
//                 return "Pato";
//             } else {
//                 // grande porte
//                 return "Garça";
//             }
//         } else {
//             // agua salgada
//             if (pequeno_porte) {
//                 return "Pardela";
//             } else {
//                 // grande porte
//                 return "Pelicano";
//             }
//         }
//     }
// }

// function peixes() {
//     if (osseo) {
//         if (carnivoro) {
//             if (pequeno) {
//                 return "Piranha";
//             } else {
//                 // grande
//                 return "Pirarucu";
//             }
//         } else {
//             // herbivoro
//             if (pequeno) {
//                 return "Cavalo Marinho";
//             } else {
//                 //grande
//                 return "Peixe-lua";
//             }
//         }
//     } else {
//         // cartilagem
//         if (carnivoro) {
//             if (pequeno) {
//                 return "Cação Anjo";
//             } else {
//                 // grande
//                 return "Tubarão Branco";
//             }
//         } else {
//             // herbivoro
//             if (pequeno) {
//                 return "Raia Borboleta";
//             } else {
//                 // grande
//                 return "Raia Manta";
//             }
//         }
//     }
// }

// function repteis() {
//     if (carnivoro) {
//         if (terrestre) {
//             if (tem_patas) {
//                 return "Lagarto";
//             } else {
//                 // sem patas
//                 return "Cobra";
//             }
//         } else {
//             // aquatico
//             if (focinho_estreito) {
//                 return "Crocodilo";
//             } else {
//                 // focinho arredondado
//                 return "Jacaré";
//             }
//         }
//     } else {
//         // herbivoro
//         if (terrestre) {
//             if (pequeno_porte) {
//                 return "Iguana do deserto";
//             } else {
//                 //grande porte
//                 return "Iguana verde";
//             }
//         } else {
//             // aquatico
//             if (agua_salgada) {
//                 return "Tartaruga verde";
//             } else {
//                 // agua doce
//                 return "Cágado";
//             }
//         }
//     }
// }
