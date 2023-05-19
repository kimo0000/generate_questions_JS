const btnShow = document.querySelectorAll('h3')
const boxOne = document.querySelector('.one')
const boxTwo = document.querySelector('.two')
const boxThree = document.querySelector('.three')


console.log(btnShow)

btnShow.forEach(btn => {
    btn.addEventListener('click', (e) => {
       let question = e.target.parentElement

       if(e.target.classList.contains('un')) {
        question.classList.toggle('show')
       }
       if(e.target.classList.contains('deux')) {
         question.classList.toggle('show')
       }
       if(e.target.classList.contains('troie')) {
         question.classList.toggle('show')
       }
    })
})