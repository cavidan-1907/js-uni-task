let plsbtns = document.querySelectorAll(".Para");
let params = document.querySelectorAll(".param");

plsbtns.forEach((plsbtn, index) => {
    let param = params[index];

    plsbtn.addEventListener("click", () => {
        params.forEach((p, i) => {
            if (i !== index) {
                p.style.display = "none";
                plsbtns[i].textContent = "+";
                p.classList.remove("none");
                p.classList.add("param");
            }
        });

        if (plsbtn.textContent === "+") {
        
            param.style.display = "block";
            param.style.height = "0";
            param.style.overflow = "hidden";
            plsbtn.textContent = "-";
            param.style.transition = "height 0.5s";
            setTimeout(() => {
                param.style.height = "30px";
            }, 0);

            param.classList.remove("param");
            param.classList.add("none");
        } else {

            plsbtn.textContent = "+";
            param.style.height = "0";
            param.style.overflow = "hidden";

            param.classList.remove("none");
            param.classList.add("param");
        }
    });
});
