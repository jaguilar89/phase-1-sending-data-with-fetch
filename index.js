// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle"
}

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configurationObject)

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(response => response.json())
    .then(data => {
        const h1 = document.createElement('h1')
        h1.textContent = `${data.id}`
        document.body.appendChild(h1)
    })
    .catch(error => {
        const h1 = document.createElement('h1')
        h1.textContent = `${error.message}`
        document.body.appendChild(h1)
    })
}