const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        number = btn.value
        changeBackground(number)


    })
})
const body = document.body

function changeBackground(number) {
    body.className = ''
    switch (number) {
        case 'pink':
            body.classList.add('pink')
            break;
            case 'yellow':
                body.classList.add('yellow')
                break;
                case 'skyblue':
                    body.classList.add('skyblue')
                    break;
                    case 'green':
                        body.classList.add('green')
                        break;
                        case 'purple':
                            body.classList.add('purple')
                            break;
                            case 'crimson':
                                body.classList.add('crimson')
                                break;
    }
}

