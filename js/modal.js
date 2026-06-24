const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal__overlay')
const openButton = document.querySelector('#open-model-button')
const closeButton = document.querySelector('#close-modal-button')
const form = document.querySelector('#application-form')

function openModal() {
	modal.classList.add('modal--active')
	document.body.style.overflow = 'hidden'

	setTimeout(() => {
		form.querySelector('input[type=text]').focus()
	}, 300)
}

function closeModal() {
	modal.classList.remove('modal--active')
	document.style.overflow = ''
	form.reset()
}

function handleSubmit(e) {
	e.preventDefault()

	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const data = {
		name,
		email,
		timestamp: new Date().toISOString()
	}

	console.log('Succes', data)

	alert('Submited!')

	setTimeout(() => {
		closeModal()
	}, 1500)
}

document.addEventListener('DOMContentLoaded', () => {
	openButton.addEventListener('click', openModal)
	closeButton.addEventListener('click', closeModal)
	overlay.addEventListener('click', closeModal)

	form.addEventListener('click', handleSubmit)

    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape' && modal.classList.contains('modal--active')){
            closeModal()
        }
    })
})
