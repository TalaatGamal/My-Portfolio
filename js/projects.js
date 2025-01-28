



// تحديد وقت الانتهاء (7 أيام من الآن)
// const countDownDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
const countDownDate = new Date().getTime() + (10 * 1000);

// تحديث العداد كل ثانية
const timer = setInterval(function() {
    // الحصول على الوقت الحالي
    const now = new Date().getTime();

    // حساب الفرق بين الوقت الحالي ووقت الانتهاء
    const distance = countDownDate - now;

    // حساب الأيام، الساعات، الدقائق، والثواني المتبقية
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة في العنصر <div> مع id="timer"
    document.getElementById("timer").innerHTML = days +" / "+ hours+" / " + minutes+" / " + seconds;

    if (distance < 0) {
        clearInterval(timer);
        // var element = document.getElementById('canceld');

        // element.id = 'new-id';


        var card = document.getElementById('a3');

        var elementToChange = card.querySelector('#canceld');

        if (elementToChange) {
            elementToChange.id = 'opend';
        }




        document.getElementById("timer-back").style.background = " #00000000"
        document.getElementById("timer").innerHTML = "";
        // يمكنك هنا تنفيذ أي شيء تريده عند انتهاء الوقت
        // alert("انتهى الوقت!");
    }
}, 1000);







