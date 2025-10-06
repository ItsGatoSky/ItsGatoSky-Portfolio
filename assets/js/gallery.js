document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('galleryCarousel');
    
    if (carouselElement) {
        carouselElement.addEventListener('slide.bs.carousel', function (event) {
            const mediaElements = carouselElement.querySelectorAll('iframe, video');

            mediaElements.forEach(media => {
                const isVideo = media.tagName === 'VIDEO';
                const isYoutube = media.tagName === 'IFRAME' && media.src.includes('youtube.com');
                if (isVideo) media.pause();
                if (isYoutube) media.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            });
        });
    }
});