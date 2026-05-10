async function analyzeResume(){

    const fileInput =
        document.getElementById("resumeFile");

    const result =
        document.getElementById("result");

    if(fileInput.files.length === 0){

        result.innerHTML =
            "Please upload a resume 📄";

        return;
    }

    const file = fileInput.files[0];

    const text = await file.text();

    let suggestions = [];

    if(text.toLowerCase().includes("python")){

        suggestions.push(
            "✔ Python skill detected"
        );
         }

    if(text.toLowerCase().includes("javascript")){

        suggestions.push(
            "✔ JavaScript skill detected"
        );
    }

    if(!text.toLowerCase().includes("projects")){

        suggestions.push(
            "❌ Add projects section"
        );
    }

    if(!text.toLowerCase().includes("skills")){

        suggestions.push(
            "❌ Add skills section"
        );
    }

    if(text.length < 500){

        suggestions.push(
             "⚠ Resume content is too short"
        );
    }

    if(suggestions.length === 0){

        suggestions.push(
            "✅ Resume looks good"
        );
    }

    result.innerHTML =
        suggestions.join("<br>");
}