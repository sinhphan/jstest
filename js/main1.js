const icons = document.querySelectorAll('.content__question i');
const answer = document.querySelectorAll('.content__answer');
icons.forEach((e,i)=>{
    e.addEventListener('click', ()=>{
        // console.log(e.classList);
        if (e.classList.contains("fa-plus")) {
            e.classList.remove("fa-plus");
            e.classList.add('fa-minus');
            // console.log(answer);
            answer.forEach((e2,i2)=>{
                e2.style.display = 'none'
                if (i2 != i) {
                    icons[i2].classList.remove("fa-minus");
                    icons[i2].classList.add('fa-plus');
                }
            });
            answer[i].style.display = 'block';
        }else{
            e.classList.remove("fa-minus");
            e.classList.add('fa-plus');
            answer[i].style.display = 'none';
        }
    });
}
);