var loadFile = function (event) {
    var image = document.getElementById('outputImg');
    image.src = URL.createObjectURL(event.target.files[0]);
};

const getInfoFromInput = (id) => {
    const text = document.getElementById(id).value;
    return text;
}

const setInfoToSpan = (id, info) => {
    document.getElementById(id).innerText = info;
}

const btn = document.getElementById("submitBtn");
btn.addEventListener('click', () => {
    const studentName = getInfoFromInput("studentNameInput");
    const studentTech = getInfoFromInput("studentTechInput");
    const studentSess = getInfoFromInput("studentSessInput");
    const studentId = getInfoFromInput("studentIdInput");

    const inputSection = document.getElementById("inputSection");
    inputSection.style.display = "none";
    const mainCardArea = document.getElementById("mainCardArea");
    mainCardArea.style.display = "block";

    setInfoToSpan("studentName", studentName);
    setInfoToSpan("studentTech", studentTech);
    setInfoToSpan("studentSession", studentSess);
    setInfoToSpan("studentID", studentId);

})