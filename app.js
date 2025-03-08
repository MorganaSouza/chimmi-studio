document.addEventListener('DOMContentLoaded', function() {

    let doramas = [
        {
            title: "Goblin",
            description: "Kim Shin, um general da dinastia Goryeo, é traído e morto injustamente. Transformado em um goblin imortal, ele busca sua noiva humana, a única capaz de libertá-lo de sua maldição. Ao longo do caminho, ele conhece um ceifador amnésico e uma jovem que afirma ser sua prometida.",
            image: "https://i.pinimg.com/736x/4e/70/9c/4e709c0df244780689bb3ab3d0373b06.jpg",
            score: 9.0
        },
        {
            title: "Pousando no Amor",
            description: "Yoon Se-ri, uma herdeira sul-coreana, sofre um acidente de parapente e aterrissa acidentalmente na Coreia do Norte. Lá, ela conhece o capitão Ri Jeong-hyeok, um oficial norte-coreano que decide ajudá-la a retornar para casa, desencadeando um romance inesperado.",
            image: "https://image.tmdb.org/t/p/original/sLBtmtaqrngZegQwbnL2fSzzTBJ.jpg",
            score: 9.1
        },
        {
            title: "Descendantes do Sol",
            description: "O capitão das forças especiais Yoo Si-jin e a cirurgiã Kang Mo-yeon se apaixonam, mas seus deveres os afastam. Quando se reencontram em uma missão humanitária em um país devastado pela guerra, seu romance é testado por desafios e sacrifícios.",
            image: "https://cdn.fstatic.com/media/movies/covers/2019/12/vN26Zf.jpg",
            score: 8.9
        },
        {
            title: "Itaewon Class",
            description: "Após ser expulso da escola e perder o pai injustamente, Park Sae-ro-yi decide abrir seu próprio bar-restaurante em Itaewon. Ele enfrenta desafios e rivais poderosos enquanto luta para alcançar o sucesso e fazer justiça.",
            image: "https://vignette.wikia.nocookie.net/drama/images/1/1e/Itaewon_Class-jTBC-2020-06.jpg/revision/latest?cb=20200117082237&path-prefix=es",
            score: 8.8
        },
        {
            title: "Vincenzo",
            description: "Vincenzo Cassano, um advogado e consigliere da máfia italiana, retorna à Coreia do Sul e se envolve em uma batalha contra uma poderosa corporação corrupta. Ele forma alianças inesperadas e usa métodos implacáveis para alcançar a justiça.",
            image: "https://i.pinimg.com/originals/e5/ca/4d/e5ca4d591d969bc6c51b8d16898ba785.jpg",
            score: 8.9
        },
        {
            title: "The King: Eternal Monarch",
            description: "O imperador Lee Gon descobre um portal para um universo paralelo, onde encontra a detetive Jung Tae-eul. Juntos, eles tentam fechar a brecha entre os mundos antes que forças sombrias causem o caos.",
            image: "https://blogger.googleusercontent.com/img/a/AVvXsEhzimrFNbI7qOEVbRM5r0nHwQhaspGrl4V-yfCf9sqBTL4lrgOfv2GksH9UW24TVm_ozbD-BhTY39Ch9F61rkgJ52tnTymYc4onkkFelhvX7o3YtCLI8Ws_agQbnXw3QW5ciOpvtV0IbK08w0-wYyt8apqmWcHPpw8gDr9apsDPmvi8_m9509Kd9ieQ",
            score: 8.3
        },

        {
            title: "Two Worlds",
            description: " Oh Yeon-joo, uma cirurgiã cujo pai é o criador de um famoso webtoon chamado W. Quando seu pai desaparece misteriosamente, ela acaba sendo transportada para dentro do universo do webtoon, onde conhece Kang Chul, o protagonista da história – um jovem milionário e ex-atirador olímpico que busca a verdade por trás do assassinato de sua família. Conforme os dois mundos se entrelaçam, Yeon-joo percebe que suas ações afetam diretamente os eventos dentro do webtoon, levando a um jogo perigoso entre realidade e ficção.",
            image: "https://i.pinimg.com/736x/b5/85/5b/b5855b02c327af8fcdce91c551556fde.jpg",
            score: 8.9
        },
        {
            title: "Hotel Del Luna",
            description: "Jang Man-wol é a dona do Hotel Del Luna, um hotel místico que recebe espíritos antes de sua jornada para o além. Quando um humano se torna seu novo gerente, segredos e antigas mágoas começam a ser revelados.",
            image: "https://image.tmdb.org/t/p/original/wBI4k86KGcIfo5pkMA92LifCLEo.jpg",
            score: 8.7
        },

        {
            title: "Amor e Batatas",
            description: "A vida de uma investigadora apaixonada sofre uma reviravolta quando um diretor rígido chega ao seu laboratório e prova que o amor pode nascer no local mais improvável.",
            image: "https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2025/02/@netflixkr-1.jpeg",
            score: 9.1
        },

        {
            title: "Pergunte as Estrelas",
            description: "Em uma estação espacial futurista, turistas e astronautas convivem em um ambiente onde recursos são escassos e decisões têm grande impacto. Kong Ryong, um obstetra-ginecologista que chega como turista, conhece Eve Kim, uma dedicada astronauta coreana-americana. Enquanto cumprem suas respectivas missões, os dois se veem desafiados por emoções inesperadas e dilemas que colocam à prova sua confiança e resiliência. A trama explora o amor e a conexão humana em meio aos desafios únicos do isolamento no espaço.",
            image: "https://danmee.jp/wp-content/uploads/2024/12/When-the-Stars-Gossip1.jpg",
            score: 9.1
        },
        {
            title: "Hae Ryung a Historiadora",
            description: "Goo Hae-ryung luta contra os estereótipos de gênero e começa uma vida nova ao se candidatar ao recém-criado posto de historiadora oficial da corte coreana.",
            image: "https://doramauniverse.com/wp-content/uploads/2023/08/images-2-1.jpg",
            score: 9.7
        },
        {
            title: "Extraordinary You",
            description: "Eun Dan Oh (Kim Hye Yoon) é uma estudante de uma academia de prestígio, mas ela tem um problema cardíaco. Um dia, por acaso, ela descobre que ela e todos os outros em seu mundo são, na verdade, personagens de um webtoon chamado “Secret”. Pior ainda, Dan Oh é apenas uma personagem secundária nesta história e espera-se que morra em breve. Não satisfeita com esse destino, ela decide escrever sua própria história forjar seu próprio destino, alterando o enredo da trama e encontrando seu próprio amor verdadeiro.",
            image: "https://www.bornincolour.com/pub/media/mageplaza/blog/post/image/f/e/feature.jpg",
            score: 9.9
        },
        {
            title: "My Love from the Star",
            description: "Do Min-joon, um alienígena que vive na Terra há 400 anos, está prestes a retornar ao seu planeta. No entanto, sua vida muda ao conhecer a famosa atriz Cheon Song-yi, e ele se vê dividido entre partir ou ficar por amor.",
            image: "https://br.web.img2.acsta.net/pictures/24/03/12/19/15/1731063.jpg",
            score: 8.9
        }
    ];
    
    displayDoramas(doramas);
    
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredDoramas = doramas.filter(dorama => 
            dorama.title.toLowerCase().includes(query)
        );
        displayDoramas(filteredDoramas);
    });
    
    function displayDoramas(doramas) {
        const dramasList = document.getElementById('dramas-list');
        dramasList.innerHTML = '';
    
        doramas.forEach(dorama => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${dorama.image}" alt="${dorama.title}">
                <h2>${dorama.title}</h2>
                <p>${dorama.description}</p>
                <div class="score">Score: ${dorama.score}</div>
            `;
            dramasList.appendChild(listItem);
        });
    }
    });
    