"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const select = this.documentElement.querySelector("select");
    var menuIcon = document.querySelector(".menu-icon");
    var main = document.querySelector("main");
    var navbar = document.querySelector(".navbar");
    const home = document.querySelector('main section:nth-child(1)');
    fadeIn(home);
    menuIcon.addEventListener("click", function () {
        menuIcon.style.display = "none";
        navbar.classList.add("active");
        if (navbar.classList.contains("active")) {
            main.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuIcon.style.display = "block";
            });
            navbar.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuIcon.style.display = "block";
            });
        }
    });

    select.addEventListener("change", function () {
        var selectedOption = select.options[select.selectedIndex];
        var option = select.options[0];
        if (!selectedOption.disabled) {
            option.style.display = "none";
            select.style.color = "#000000";
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menuIcon.style.display = "none";
            navbar.classList.remove("active");
        } else {
            menuIcon.style.display = "block";
        }
    });

    var date = new Date();
    var yearActual = date.getFullYear();
    const year = document.querySelector("#year");
    year.textContent = yearActual

});

async function fadeIn(tag) {
    await fadeOut(tag);
    tag.classList.add("fade-in-out-text");
    tag.style.display = "block";
    setTimeout(() => {
        tag.style.opacity = '1';
    }, 500);
}

function fadeOut(tag) {
    return new Promise((resolve, reject) => {
        tag.style.opacity = '0';
        setTimeout(() => {
            tag.style.display = "none";
            tag.classList.remove('fade-in-out-text');
            resolve();
        }, 500);
    });
}

const menus = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

menus.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        menus.forEach(function (link) {
            link.classList.remove('active-menu');
        });
        this.classList.add('active-menu');
        sections.forEach(function (sec) {
            fadeOut(sec);
        })
        fadeIn(document.querySelector('#' + this.textContent.toLowerCase()));
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    var subject = encodeURIComponent('Solicitação de contato sobre: ' + assunto);
    var body = encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\nMensagem:\n' + message);
    window.open('mailto:youmail@exampple.com?subject=' + subject + '&body=' + body);
});