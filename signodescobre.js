/* Comentário*//*corrigir será chamado quando clicar no botão*/
function abrirPopUp() {
    /*pontuação da questão 1 */

    if (document.signodescobre.questao1[0].checked) {

        alert(" Parabéns! Seu signo é  Peixes"
        )
    } else if (document.signodescobre.questao1[1].checked) {

        alert(" Parabéns! Seu signo é  Áries"

        )
    } else if (document.signodescobre.questao1[2].checked) {
        document.getElementById('3r').innerHTML = "Touro"

    } else if (document.signodescobre.questao1[3].checked) {
        alert(" Parabéns! Seu signo é  Gêmeos"

        )
    } else if (document.signodescobre.questao1[4].checked) {
        alert(" Parabéns! Seu signo é  Câncer"

        )
    } else if (document.signodescobre.questao1[5].checked) {
        alert(" Parabéns! Seu signo é  Leão"

        )
    } else if (document.signodescobre.questao1[6].checked) {
        alert(" Parabéns! Seu signo é  Virgem"

        )
    } else if (document.signodescobre.questao1[7].checked) {
        alert(" Parabéns! Seu signo é  Libra"

        )
    } else if (document.signodescobre.questao1[8].checked) {
        alert(" Parabéns! Seu signo é  Escorpião")

    } else if (document.signodescobre.questao1[9].checked) {
        alert(" Parabéns! Seu signo é  Sagitário")

    } else if (document.signodescobre.questao1[10].checked) {
        alert(" Parabéns! Seu signo é  Capricórnio")
       } else if (document.signodescobre.questao1[11].checked) {
        alert(" Parabéns! Seu signo é  Aquário"

        )
    }

    document.quiz1.reset();





}