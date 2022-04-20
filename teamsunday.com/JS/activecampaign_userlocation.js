function addDocumentTitleToFormAC() {
    if (document.querySelector('._form-content') !== null) {
        document.querySelector('[data-name="form_submit_page"]').value = document.title;
        console.log("has a form");
    }
};

document.addEventListener("DOMContentLoaded", addDocumentTitleToFormAC);



var checkExist = setInterval(function() {
    if ($('#the-canvas').length) {
       console.log("Exists!");
       clearInterval(checkExist);
    }
 }, 100); // check every 100ms