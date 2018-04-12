document.addEventListener('DOMContentLoaded', function(event) {
  
  /**
   * event send from component bs-carousel
   * when all images in slide is loaded
   */
  if (slide) {
    slide.addEventListener('slideLoaded', function(e) {
      document.getElementById('carousel').hidden = false;
    });
  }

});

var slideIndex = 1;

/**
 * Ajouter dans la liste le nom de la class ajouté
 */

var slides = [
  
  {
    className: "myslide",
    slideIndex: 1
  }

];

/**
 * Commencer les operations lorsque tous le contenu est chargé
 */
document.addEventListener("DOMContentLoaded", function(event) {
  var choice = getChoice();
  slides.map(slide => {
    if (document.getElementsByClassName(slide.className).length > 0) {
      changeSlide(undefined, slide.slideIndex, slide.className);
    }
  });
  if(choice) document.getElementsByClassName(choice)[0].click();
});

function plusDivs(n, className) {
  var slideSubject = slides[findIndexSlideByName(className)];
  changeSlide(undefined, (slideSubject.slideIndex += n), className);
}

function changeSlide(element, n, className, idToScroll) {
  var i;
  var slideSubject = slides[findIndexSlideByName(className)];
  var x = document.getElementsByClassName(className);
  slideSubject.slideIndex = determineSlideIndex(n, x);
  setOngletToActive(element, slideSubject);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideSubject.slideIndex - 1].style.display = "";
  if (idToScroll) scrollToId(idToScroll);
}

function determineSlideIndex(n, doc) {
  if (n > doc.length) {
    return 1;
  } else if (n < 1) {
    return doc.length;
  }
  return n;
}

function setOngletToActive(element, slideSubject) {
  if (element) {
    /**
     * supprime tous les class active dans les elements qui contiennent la classe slideSubject.onglet
     */
    $(`.${slideSubject.onglet}`).removeClass("active");
    /**
     * ajoute la classe active pour l'element concerné soit par clique de ce dernier soit simplement car il correspond à l'element en cours
     */
    $(element).addClass("active");
  } else {
    var currentTab = document.getElementsByClassName(slideSubject.onglet);
    if (currentTab[slideSubject.slideIndex - 1])
      setOngletToActive(currentTab[slideSubject.slideIndex - 1], slideSubject);
  }
}

function findIndexSlideByName(name) {
  return slides.findIndex(slide => {
    return slide.className === name;
  });
}


;
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */






