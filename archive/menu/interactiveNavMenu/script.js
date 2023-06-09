let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })
}

// sections.forEach(sec => { ... }): Цей рядок коду використовує метод forEach для перебору кожного елемента в колекції sections. sections ймовірно є змінною, що містить масив елементів або колекцію DOM-елементів на веб-сторінці.

// let top = window.scrollY;: Цей рядок коду отримує поточну вертикальну позицію прокрутки сторінки і зберігає її у змінну top. Змінна window.scrollY містить кількість пікселів, на яку сторінка прокручена вгору від верхнього краю.

// let offset = sec.offsetTop;: Цей рядок коду отримує вертикальну позицію (відстань від верхнього краю сторінки) поточного елемента sec і зберігає її у змінну offset. Властивість offsetTop містить відстань в пікселях від верхнього краю найближчого предка з позицією position: relative або position: absolute.

// let height = sec.offsetHeight;: Цей рядок коду отримує висоту поточного елемента sec і зберігає її у змінну height. Властивість offsetHeight містить повну висоту елемента, включаючи видиму частину і прокрутку.

// let id = sec.getAttribute('id'): Цей рядок коду отримує значення атрибуту id поточного елемента sec і зберігає його у змінну id. Атрибут id використовується для ідентифікації унікального елемента на сторінці.