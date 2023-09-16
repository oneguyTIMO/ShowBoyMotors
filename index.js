handleShowSideBar = () => {
  console.log('I will make it with this tech')
  const navlinks = document.querySelector('.navlinks')
  navlinks.classList.add('navlinksShown')
  const body = document.querySelector('body')
  body.classList.add('bodyUnScroll')
}
handleCloseSideBar = () => {
  const navlinks = document.querySelector('.navlinks')
  navlinks.classList.remove('navlinksShown')
  const body = document.querySelector('body')
  body.classList.remove('bodyUnScroll')
}
handleShowDropDown = () => {
  console.log('Please lord i need a helper to help me up')
  const DropDownText = document.querySelector('.DropDownText')
  DropDownText.classList.add('')
}
