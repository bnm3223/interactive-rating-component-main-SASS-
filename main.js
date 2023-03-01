var button = document.querySelector('.btn')
var first = document.querySelector('#content-rating')
var second = document.querySelector('#content-thx')
var rate = document.querySelector('#rate')
var feedback

const feedbackList = document.querySelectorAll('.feedback li');
feedbackList.forEach(entry => entry.addEventListener('click', e => {
    // Remove the 'active' class from all 'li' elements except for the one that was clicked on
    feedbackList.forEach(li => {
        if (li !== entry && li.classList.contains('active')) {
            li.classList.remove('active');
        }
    });
    // Add the 'active' class to the clicked 'li' element
    if (!entry.classList.contains('active')) {
        entry.classList.add('active');
        feedback = entry.getAttribute('data-ans')
        if (feedback !== "") {
            button.removeAttribute("disabled");
        }
    } else if (entry.classList.contains('active')) {
        entry.classList.remove('active');
        feedback = "";
       
            button.setAttribute("disabled",true);

    }
    e.preventDefault();
}));

button.addEventListener('click', function () {
    rate.innerHTML = feedback;
    first.style.display = 'none';
    second.style.display = 'block';
})


