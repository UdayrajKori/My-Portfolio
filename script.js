const resumeBtn = document.querySelectorAll(".resume-btn");

resumeBtn.forEach((btn, idx) =>{
    btn.addEventListener('click', ()=>{
        const resumeDetails = document.querySelectorAll(".resume-details");

        resumeBtn.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach((detail) => {
          detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active");

    });
});