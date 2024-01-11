const progress = document.querySelectorAll('.num')
const btnAntes = document.getElementById('btn-antes')
const btnDespues = document.getElementById('btn-despues')

let progressActive = 1

btnDespues.addEventListener('click', () => {
    progressActive++
    
    if(progressActive > progress.length){
        progressActive = progress.length
    }

    update()
})

btnAntes.addEventListener('click', () => {
    progressActive--

    if(progressActive < 1) {
        progressActive = 1
    }

    update()
})

function update(){
    progress.forEach((progress, idx) => {
        if(idx < progressActive) {
            progress.classList.add('active-progress')
        } else {
            progress.classList.remove('active-progress')
        }
    })

    const actives = document.querySelectorAll('.active-progress')

    progress.style.width = (actives.length - 1) / (progress.length - 1) * 100 + '%'

    if(progressActive === 1) {
        btnAntes.disabled = true
    } else if(progressActive === progress.length) {
        btnDespues.disabled = true
    } else {
        btnAntes.disabled = false
        btnDespues.disabled = false
    }
}
