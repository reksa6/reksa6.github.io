$(document).ready(function(){
    $(".nueta").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_nueta = split[1];

        $(".nueta").removeClass('aktif');
        $("#nueta_"+id_nueta).addClass('aktif');

        

        $("#dituker_1").slideUp();
        $("#dituker_2").siblings();
        $("#dituker_3").siblings();
        $("#dituker_"+id_nueta).slideToggle("slow");
    });
});