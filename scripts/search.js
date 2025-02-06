document.addEventListener("DOMContentLoaded", function () {
    const museumFilter = document.getElementById("museumFilter");
    const artistFilter = document.getElementById("artistFilter");
    const artworks = document.querySelectorAll(".artwork");

    function filterArtworks() {
        const selectedMuseum = museumFilter.value;
        const selectedArtist = artistFilter.value;

        artworks.forEach(artwork => {
            const artworkMuseum = artwork.getAttribute("data-museum");
            const artworkArtist = artwork.getAttribute("data-artist");

            if ((selectedMuseum === "all" || artworkMuseum === selectedMuseum) &&
                (selectedArtist === "all" || artworkArtist === selectedArtist)) {
                artwork.style.display = "block";
            } else {
                artwork.style.display = "none";
            }
        });
    }

    museumFilter.addEventListener("change", filterArtworks);
    artistFilter.addEventListener("change", filterArtworks);
});
