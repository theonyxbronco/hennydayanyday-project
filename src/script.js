// LOADING FUNCTION //
window.addEventListener("load", function() {
    const loader1 = document.querySelector(".loading");
    loader1.className += " hidden"; //class "loader hidden"
});


$(document).ready(function(){
    // Function to update button highlight
    function updateButtonHighlight(selectedButtonId) {
        // Remove highlights from all buttons
        $('.main-button a').removeClass('highlighted-btn');

        // Add highlight to selected button
        $('#' + selectedButtonId).addClass('highlighted-btn');
    }

    // Handle About button click
    $('#aboutBtn').click(function(){
        $('#about').show();
        $('#gallery').hide();
        $('#magazine').hide();
        updateButtonHighlight('aboutLink');
    });

    // Handle Gallery button click
    $('#galleryBtn').click(function(){
        $('#gallery').show();
        $('#about').hide();
        $('#magazine').hide();
        updateButtonHighlight('galleryLink');
    });

    // Handle Magazine button click
    $('#magazineBtn').click(function(){
        $('#magazine').show();
        $('#about').hide();
        $('#gallery').hide();
        updateButtonHighlight('magazineLink');
    });
});