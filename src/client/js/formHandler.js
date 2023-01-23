



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const isValid = Client.checkForName(formText);

    if (isValid) {
        const userInput={url:formText}
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/analyzeText', {
            method: "POST", credentials: "same-origin", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(userInput)
        })
            .then(res => {
                return res.json()
            })
            .then(function (data) {
                document.getElementById('results').innerHTML = `
                <p>Subjectivity: </p>
                <p>First part of text: </p>
                `
            })
    }

}

export { handleSubmit }
