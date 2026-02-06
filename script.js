function abrirWhatsApp() {
    // contato do salão de beleza
    var numeroWhatsApp = "+5511915839864";
    var mensagem = "Olá! Gostaria de agendar um horário no salão, quando tem disponibilidade?";
    var url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}