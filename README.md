# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Alt text](image.png)

### Links

- Solution URL: [https://github.com/Heriniaina-30/News-Letter-SignUp/]
- Live Site URL: [https://news-letter-sign-up-liart.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-Javascript 
- [Styled Components](https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap) - 


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
/* Pour les petits écrans comme les téléphones */
@media (max-width: 768px) {
    main{
        flex-direction: column-reverse;
    }

    .image {
        background-image: url('assets/images/illustration-sign-up-mobile.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 0.5rem;
        width: 100%;
    }
    

    main h1 {
        font-size: 1.8rem; 
    }

    main p {
        font-size: 1.2rem;
    }

    main button {
        width: 100%;
        padding: 1rem;
    }

    main .card button:hover {
        background-color: hsl(4, 100%, 67%);
    }

    .card-One{
        height: 100%;
    }
}
```
```js
function validerEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
```


### Continued development

I want to master the utilisation of flexbox and grid


