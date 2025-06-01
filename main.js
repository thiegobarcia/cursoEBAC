$(document).ready(function(){
    function taskAdd() {
        var input = $('#taskInput').val().trim();
        if (input) {
            $('ul').append(`<li>${input} <i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>`);
            $('#taskInput').val('');
        }
    }

    $('#form').submit(function(event){
        event.preventDefault();
        taskAdd();
    });

    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(300, function() { $(this).remove(); });
    });

    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    });
});