let reponse,
    numQuizz = 0;


$('#envoyer').click(function () {
    $.ajax({
        url: './assets/json/quizz_enigme.json',
        datatype: 'json',
        success: (quizz) => {
            let reponse = $('#input').val();
            
            if (reponse) {
                if (reponse === quizz[numQuizz].reponse) {
                    $('#alphabet').slideUp(1000).slideDown(1000);
                    setTimeout(() => {
                        $('#enonce').empty();
                        $('#enonce').text(quizz[numQuizz+1].enonce);
                        $('#textQuizz').text(quizz[numQuizz+1].enigme);
                        // $('#textQuizz').remove();
                        $('.p1').empty();
                        $('.p1').text('Le savais tu ?');
                        $('.paragraphe-forever').empty();
                        $('.p2').text(quizz[numQuizz+1].saisTu);
                        numQuizz++;
                    }, 500);
                    
                }else {
                    console.log(reponse);
                    console.log('Oops! Recommencer');
                }
            }else {
                console.log('Choisit une reponses')
            }
        },
        error: function (quizz) {
            console.log(quizz);
        }
    });
});