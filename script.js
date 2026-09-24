document.addEventListener('DOMContentLoaded', () => {
    const txt = "Hôm nay là Tết Trung Thu, chúc cho ngdep halinh thật nhiều vui vẻ và hạnh phúc nhee!!! Chúc Linh luôn rực rỡ như ánh trăng rằm, lúc nào cũng xinh điẹp, cute, khuôn trăng đầy đặn, chỗ nào cũng nở nang. Nhưng mà rực rỡ vừa thoi không ngta tưởng chị Hằng xuống trần gian nhé. Chúc Linh sẽ luôn giữ được sự vô tư hài hài mát mát yêu đời, mang lại năng lượng tích cực cho mọi người, và Linh cũng cười thật nhiều và thật vui nhé. Thoi cũng hơi cringe ròi, t văn không hay chữ cũng chẳng tốt, viết đến đây thoi. Mong là bức thư này sẽ làm Linh cười. Chúc b Linh Trung Thu vui vẻ nhé <3";
    const tg = document.getElementById('typewriter-text');
    let i = 0;

    function f1() {
        if (i < txt.length) {
            tg.innerHTML += txt.charAt(i);
            i++;
            setTimeout(f1, 50);
        }
    }

    setTimeout(f1, 1000);

    const lc = document.querySelector('.lantern-container');
    
    setInterval(() => {
        const l = document.createElement('div');
        l.classList.add('lantern');
        l.style.left = Math.random() * 100 + '%';
        l.style.animationDuration = (Math.random() * 5 + 10) + 's';
        l.style.width  = (Math.random() * 20 + 30) + 'px';
        l.style.height = (Math.random() * 30 + 50) + 'px';
        
        lc.appendChild(l);

        setTimeout(() => {
            l.remove();
        }, 15000);
    }, 2000);
    const m_anh = [
        "img/anh1 (1).jpeg", 
        "img/anh2.jpeg", 
        "img/anh3.jpeg", 
        "img/anh4.jpeg", 
        "img/anh5.jpeg", 
        "img/anh6.jpeg", 
        "img/anh7.jpeg", 
        "img/anh8.jpeg", 
        "img/anh9.jpeg", 
        "img/anh10.jpeg", 
        "img/anh11.jpeg", 
        "img/anh12.jpeg", 
        "img/anh13.jpeg", 
        "img/anh14.jpeg", 
        "img/anh15.jpeg", 
    ];

    const vung = document.getElementById('vung');

    function thamanh() {
        const a = document.createElement("img");
        a.className = "aroi";
        a.src = m_anh[Math.floor(Math.random() * m_anh.length)];
        
        const kt = Math.random() * 60 + 50;
        a.style.width = kt + "px";
        a.style.height = kt + "px";
        a.style.left = Math.random() * 90 + 5 + "vw";
        a.style.animationDuration = Math.random() * 6 + 8 + "s";
        
        vung.appendChild(a);
        
        setTimeout(() => a.remove(), 15000);
    }

    setInterval(thamanh, 600);
});