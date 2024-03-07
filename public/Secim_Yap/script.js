var isAnimating = true;

function stopHeartAnimation() {
    var heart = document.getElementById("heart");
    heart.style.animationPlayState = 'paused';
    isAnimating = false;
}

var noButtonClickCount = 0;
var extraMessageDiv = document.getElementById("extraMessage");

document.getElementById("noButton").addEventListener("click", function() {
    if (isAnimating) {
        var yesButton = document.getElementById("yesButton");
        var style = window.getComputedStyle(yesButton, null);
        var matrix = new WebKitCSSMatrix(style.transform);
        var currentScale = matrix.m11; // m11 öğesi ölçeklendirme değerini temsil eder
        var newScale = currentScale + 0.1;

        // Ölçeklendirme miktarına göre butonun konumunu ayarlayın
        var translateX = -50 * (newScale - 1);
        var translateY = 30 * (newScale - 1);

        yesButton.style.transform = `translate(${translateX}px, ${translateY}px) scale(${newScale})`;
    noButtonClickCount++;
    
    if (noButtonClickCount === 4) {
        extraMessageDiv.innerHTML = 'Evet tuşuna basmadan bir sonraki sayfaya geçemezsin 😄';
    } else if (noButtonClickCount === 10) {
        extraMessageDiv.innerHTML = 'Evet demiyor musun yani 😢';
    }
    }
});
// Daha önce verdiğiniz JavaScript kodları burada yer alacak

document.getElementById("yesButton").addEventListener("click", function() {
    // Sayfadaki tüm içeriği temizleyin
    document.body.innerHTML = '';

    // Yeni bir video elementi oluşturun ve MP4 videosunu yükleyin
    var video = document.createElement("video");
    video.setAttribute("src", "final-video.mp4"); // Bu kısma gerçek video dosyanızın yolunu yazın
    video.setAttribute("autoplay", "true"); // Otomatik oynatma
    video.setAttribute("loop", "true"); // Videoyu döngüye al
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.objectFit = 'cover'; // Videoyu ekranı kaplayacak şekilde ayarla
    video.style.zIndex = '1000'; // Videonun en üstte olmasını sağla

    // Videoyu sayfanın body'sine ekleyin ve oynatın
    document.body.appendChild(video);
    video.play();
});
