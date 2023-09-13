const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector('.uploaded-area');
form.addEventListener("click", ()=>{
    fileInput.Click();
});
fileInput.onechange =({target})=>{
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        console.log(fileName);
    }
}
function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/upload.php");
    xhr.upload.addEventListener("progress", e=>{
        console.log(e);
    });
    let formData = new formData(form);
    xhr.send();

}