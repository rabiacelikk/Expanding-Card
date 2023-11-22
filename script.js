 /*sorgu seçicinin yaptığı şey, herhangi bir şeyi seçmemize izin vermektir. */
 
 const panels = document.querySelectorAll('.panel')
 
 panels.forEach(panel => {
       panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
       })
 })

 function removeActiveClasses() {
      panels.forEach(panel => {
        panel.classList.remove('active')
      })
 }
