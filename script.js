document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    // Coding By AzadCoder - ig: @azadcoderr
    const possibleChars = "оксанаabcdefghijklmnopqrstuvwxyz?";

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.5}s`; // Her harf için artan gecikme ekler
        title.appendChild(span);

        // Her harf için rastgele karakterle değiştirme işlemi
        setTimeout(function () {
            for (let j = 0; j < 10; j++) {
                setTimeout(function () {
                    span.textContent = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
                }, (j * 50)); // Her karakter değişimi için 50ms gecikme ekler
            }
        }, i * 0.5 * 1000);

        // Gerçek harf eklenir
        setTimeout(function () {
            span.textContent = text[i];
        }, (i + 2) * 0.5 * 1000); // Her harf için 0.5 saniye bekleyerek gerçek harfin ekranda görünmesini sağlar
    }
});






// const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa']; // Renkli kalp renkleri
// const heartInterval = 30; // Her 10 pikselde bir kalp oluştur
// const numberOfHearts = 100; // Oluşturulacak kalp sayısı

//  // Evet butonu
//  const yesButton = document.getElementById('yesButton');

//  yesButton.addEventListener('click', function() {
//      generateHearts();
//  });

//  function generateHearts() {
//      const symbols = ['❤️', '💖', '💗', '💕', '💓']; // 
//      const heartInterval = 50; //   200ms'de bir oluştur 

//      setInterval(() => {
//          const symbol = symbols[Math.floor(Math.random() * symbols.length)]; // Rastgele sembol 
//          createHeart(symbol);
//      }, heartInterval);
//  }
// Coding By AzadCoder - ig: @azadcoderr
//  function createHeart(symbol) {
//      const heart = document.createElement('div');
//      heart.classList.add('heart');
//      heart.textContent = symbol; // Sembole göre içeriği ayarla
//      heart.style.left = Math.random() * window.innerWidth + 'px'; //  yatay konum
//      heart.style.top = Math.random() * window.innerHeight + 'px'; // dikey konum
//      heart.style.animationName = 'heartAnimation';
//      heart.style.animationDuration = '.4s'; // Animasyon süresi
//      document.body.appendChild(heart);
//  }



const heartColors = ['#ff5e5e', '#ffb6b6', '#ff8484', '#ff9292', '#ffaaaa']; // Renkli kalp renkleri
const heartInterval = 15; // Her 10 pikselde bir kalp oluştur
const numberOfHearts = 500; // Oluşturulacak kalp sayısı

// Evet butonu
const yesButton = document.getElementById('yesButton');

yesButton.addEventListener('click', function () {
    generateHearts();


    const title = document.querySelector('.title');
    title.textContent = 'Yeyyy!';
});
// Coding By AzadCoder - ig: @azadcoderr
function generateHearts() {
    const symbols = ['❤️', '💖', '💗', '💕', '💓'];
    const heartInterval = 100;

    setInterval(() => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)]; // Rastgele sembol  
        createHeart(symbol);
    }, heartInterval);
}

function createHeart(symbol) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = symbol;
    heart.style.left = Math.random() * window.innerWidth + 'px';    
    heart.style.top = Math.random() * window.innerHeight + 'px';             
    heart.style.animationName = 'heartAnimation';
    heart.style.animationDuration = '.9s';
    document.body.appendChild(heart);
}

const btn = document.getElementById('noButton'); // Butonu seçiyoruz

let isMoved = false; // Butonun hareket edip etmediğini izlemek için bir bayrak

btn.addEventListener("mouseover", function() {
    if (!isMoved) {
        btn.style.transform = `translate(-80px, 50px)`; // Butonu sola kaydır
        isMoved = true; // Bayrağı güncelle
    } else {
        btn.style.transform = `translate(80px, 50px)`; // Butonu başlangıç pozisyonuna geri getir
        isMoved = false; // Bayrağı güncelle
    }
    
    btn.style.transition = "all 0.3s ease"; // Geçiş efektini ayarla
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        noButton.style.animation = 'explode 0.5s forwards'; // Patlama animasyonunu etkinleştir
        if (!noButton.dataset.tabPressed) {
            noButton.dataset.tabPressed = true; // tab basıldı olarak işaretle
        setTimeout(() => noButton.style.display = 'none', 500); // Butonu 0.5 saniye sonra gizle
        event.preventDefault(); // block tab

        // "title" change
        const title = document.querySelector('.title');
        title.textContent = 'Hile yapmak yok :)';
        

        //  turn back
        setTimeout(() => {
            title.textContent = 'Çıkalım mı artık?';
        }, 2000);
    }
}
});
// Coding By AzadCoder - ig: @azadcoderr

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });


 
    document.onkeydown = function (e) {
        if (e.ctrlKey && (e.keyCode === 85)) {
            return false;
        }
    }; 
 
    window.addEventListener("DOMContentLoaded", function () {
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
                disabledEvent(e);
            }
            if ((e.ctrlKey || e.metaKey) && e.keyCode == 76 && e.shiftKey) {
                disabledEvent(e);
            }
        }, false);
    function disabledEvent(e) {
            if (e.stopPropagation) {
        e.stopPropagation();
            }
    if (e.preventDefault) {
        e.preventDefault();
            }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
        }
    }); 


 
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "Sayfayı kapatmak istediğinizden emin misiniz?";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
    });
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode == 87) {
        disabledEvent(e);
        }
    if (e.altKey && e.keyCode == 115) {
        disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
        e.stopPropagation();
        }
    if (e.preventDefault) {
        e.preventDefault();
        }
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
    } 
