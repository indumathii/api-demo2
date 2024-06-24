const row_class = document.querySelector(".row_class")
console.log(row_class)
const submit_btn = document.querySelector(".btn1")

submit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    row_class.innerHTML=" "
    const userinput_value = document.getElementById("userinput").value
    console.log(userinput_value)
    let url = `https://opentdb.com/api.php?amount=${userinput_value}&type=multiple`
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {

            console.log(data);
            for (let i = 0; i < userinput_value; i++) {
                let arrays = data.results[i];
                let question_1 = arrays.question
                let correct_answers = arrays.correct_answer
                let wrong_answers = arrays.incorrect_answers
                let category = arrays.category
                const div_element = document.createElement("div")
                div_element.setAttribute("class", "card card-body col-12 col-sm-12 col-md-6 col-lg-4")
                div_element.style.background='lightblue'
                row_class.appendChild(div_element)
                const category_element = document.createElement("div")
                const question_element = document.createElement("div")
                const correct_answers_element = document.createElement("div")
                const wrong_answers_element = document.createElement("div")
                category_element.setAttribute("class", "category_element")
                question_element.setAttribute("class", "question_element")
                correct_answers_element.setAttribute("class", "correct_answers_element")
                wrong_answers_element.setAttribute("class", "wrong_answers_element")
                div_element.append(category_element, question_element, wrong_answers_element, correct_answers_element)
                category_element.innerHTML=`Category: ${category}`;
                question_element.innerHTML=`Question ${i+1}: ${question_1}`
                correct_answers_element.innerHTML=`Correct Answer: ${correct_answers}`
                wrong_answers_element.innerHTML=`Incorrect Answers: ${wrong_answers}`

                console.log(question_1)

            }

        
        })

    .catch(error => {
        console.error('Error fetching data:', error);
    });
})

const clear_btn = document.querySelector(".btn2")
clear_btn.addEventListener("click", function () {
    window.location.reload();
})