/* Comentário*//*corrigir será chamado quando clicar no botão*/
function corrigir() {
    /*pontuação da questão 1 */

    if (document.quizsigno.questao1[0].checked) {

        document.getElementById('r1').innerHTML = "A autoestima tende a se elevar frente à harmonia entre Lua, Vênus e Netuno, o que deixa você mais confiante perante a vida e na articulação social. Entretanto, é preciso ter cautela ao se expor, evitando revelar os projetos que estejam em desenvolvimento."
    } else if (document.quizsigno.questao1[1].checked) {

        document.getElementById('r2').innerHTML = "É importante dar valor à fruição emotiva e sensorial. A Lua no setor íntimo tende a evidenciar seu lado mais instintivo, o que conflita com a necessidade de racionalização e economia. Pensando nisso, busque avaliar as situações antes de agir."

    } else if (document.quizsigno.questao1[2].checked) {
        document.getElementById('r3').innerHTML = "Desenvolver empatia tende a ajudar a resgatar a harmonia interpessoal, visto a harmonia entre Vênus e Netuno. Os interesses nas relações tendem a se revelar contrastantes, demonstrando a necessidade de afinar o diálogo e as expectativas emocionais."

    } else if (document.quizsigno.questao1[3].checked) {
        document.getElementById('r4').innerHTML = "A economia criativa tende a ajudar a superar problemas financeiros. É fundamental desenvolver esperteza e senso estratégico diante dos desafios na gestão do cotidiano. Além disso, tente evitar ações radicais, pois a Lua no setor das rotinas entra em tensão com Mercúrio e Urano."

    } else if (document.quizsigno.questao1[4].checked) {
        document.getElementById('r5').innerHTML = "Procure se valorizar perante o entorno imediato, usando seu carisma e empatia que tendem a aflorar agora. Mas cuidado! Você tende a ficar emocionalmente vulnerável à pressão das pessoas próximas com a Lua no setor social. Por isso, tente evitar trilhar caminhos que fujam das suas reais necessidades."

    } else if (document.quizsigno.questao1[5].checked) {
        document.getElementById('r6').innerHTML = "É preciso conciliar responsabilidades e prazeres. Procure cultivar otimismo frente às dificuldades. Neste momento, as necessidades emocionais tendem a conflitar com as obrigações, o que prejudica seu desempenho e sua produtividade."

    } else if (document.quizsigno.questao1[6].checked) {
        document.getElementById('r7').innerHTML = "Lua, Vênus e Netuno se harmonizam, podendo evidenciar seu carisma e sociabilidade. Contudo, é importante ser mais criteriosa e diplomática ao se manifestar sobre temas sensíveis para a coletividade. Procure se mostrar discreta quanto a possíveis frustrações."

    } else if (document.quizsigno.questao1[7].checked) {
        document.getElementById('r8').innerHTML = "Convém fazer valer seu senso criativo que se amplia, buscando analisar com mais critério suas possibilidades e rever procedimentos. Restrições materiais podem lhe desafiar a rever objetivos e estratégias, pois a Lua segue em tensão com Mercúrio e Urano no circuito do patrimônio."

    } else if (document.quizsigno.questao1[8].checked) {
        document.getElementById('r9').innerHTML = "Procure evitar confrontos diretos, buscando abordagens sutis e também demonstrando gentileza e empatia. Pode ser desafiador lidar com um entorno crítico e um tanto combativo, o que vai demandar inteligência emotiva de sua parte."

    } else if (document.quizsigno.questao1[9].checked) {
        document.getElementById('r10').innerHTML = "Busque não se deixar pressionar pelo entorno ao tomar decisões sem o devido amadurecimento. A harmonia entre Lua, Vênus e Netuno tende a evidenciar o recolhimento íntimo como forma de alcançar equilíbrio emotivo e de fortalecer sua resiliência frente às dificuldades."

    } else if (document.quizsigno.questao1[10].checked) {
        document.getElementById('r11').innerHTML = "Sua postura tende a ser marcada por empatia e generosidade com Lua, Vênus e Netuno harmonizados, o que leva ao fortalecimento dos vínculos de amizade. Contudo, é fundamental se proteger de contatos abusivos, além de avaliar os pontos positivos e negativos de suas ações."

    } else if (document.quizsigno.questao1[11].checked) {
        document.getElementById('r12').innerHTML = "É fundamental não permitir que o foco no trabalho prejudique a vida familiar, por isso busque avaliar suas opções. Lua, Vênus e Netuno harmonizados no circuito profissional tendem a destacar um momento positivo para desenvolver seus talentos e investir na carreira."

    }

    document.quiz1.reset();





}