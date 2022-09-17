const   mainWindow = document.querySelector('#main'),
        promoWindow = document.querySelector('#promo'),
        buttonOpenMenu = document.querySelector('.main__triangle_mid'),
        goToMain = document.querySelector('.promo__triangle_right'),

        goToSkills = document.querySelector('.promo__skills_title'),
        skillsWindow = document.querySelector('#skills'),
        goToPromo = document.querySelector('.skills__triangle_right'),

        goToAbout = document.querySelector('.promo__aboutMe_title'),
        aboutMeWindow = document.querySelector('#aboutMe'),

        menuPort = document.querySelector('.menu'),
        buttonCloseMenu = document.querySelector('.menu__logo'),
        mainToPromo = document.querySelector('.main__title');

buttonOpenMenu.addEventListener('click', () => {
    menuPort.classList.add('active');
});

buttonCloseMenu.addEventListener('click', () => {
    menuPort.classList.remove('active');
});



mainToPromo.addEventListener('click', () => {
    mainWindow.style.display = 'none';
    promoWindow.style.display = 'block';
});

goToMain.addEventListener('click', () => {
    promoWindow.style.display = 'none';
    mainWindow.style.display = 'block';
});

goToSkills.addEventListener('click', () => {
    promoWindow.style.display = 'none';
    skillsWindow.style.display = 'block';
});

goToPromo.addEventListener('click', () => {
    skillsWindow.style.display = 'none';
    promoWindow.style.display = 'block';
});

goToAbout.addEventListener('click', () => {
    promoWindow.style.display = 'none';
    aboutMeWindow.style.display = 'block';
});