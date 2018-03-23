/* Simple Slider */

const debug = false;

class simpleSlider {
  constructor(id, childrenClassName = 'slider-item', prevBtnClass = 'slider-prev-btn', nextBtnClass = 'slider-next-btn') {
    debug && console.log('slider constructor');
    this.id = id;
    this.element = document.getElementById(id);
    this.prevBtn = this.element.getElementsByClassName(prevBtnClass)[0];
    this.nextBtn = this.element.getElementsByClassName(nextBtnClass)[0];
    this.children = this.element.getElementsByClassName(childrenClassName);
    this.currentSlideIndex = 0;
    debug && console.log(this.element, this.children, this.prevBtn, this.nextBtn);
    this.initListeners();
    this.showCurrentSlide();
    this.timeout = this.setNewTimeout();
    this.setModStyles();
  }
  
  initListeners() {
    this.prevBtn.addEventListener('click', this.onPrevClick.bind(this));
    this.nextBtn.addEventListener('click', this.onNextClick.bind(this));
  }
  
  onPrevClick(e) {
    if (e) e.preventDefault();
    clearTimeout(this.timeout);
    this.timeout = this.setNewTimeout();
    this.children[this.currentSlideIndex].style.opacity = '0.5';
    if (this.currentSlideIndex > 0)
      this.currentSlideIndex --;
    else
      this.currentSlideIndex = this.children.length - 1;
     this.children[this.currentSlideIndex].style.opacity = '0.5';
    setTimeout(() => {
      this.children[this.currentSlideIndex].style.opacity = '1';
    }, 3);
    setTimeout(this.showCurrentSlide.bind(this), 200);
    debug && console.log('prev click');
  }
  
  onNextClick(e) {
    if (e) e.preventDefault();
    clearTimeout(this.timeout);
    this.timeout = this.setNewTimeout();
    this.children[this.currentSlideIndex].style.opacity = '0.5';
    if (this.currentSlideIndex < this.children.length - 1)
      this.currentSlideIndex ++;
    else
      this.currentSlideIndex = 0;
    this.children[this.currentSlideIndex].style.opacity = '0.5';
    setTimeout(() => {
      this.children[this.currentSlideIndex].style.opacity = '1';
    }, 3);
    setTimeout(this.showCurrentSlide.bind(this), 200);
    debug && console.log('next click');
  }
  
  showCurrentSlide() {
    for (let i = 0; i < this.children.length; i++) {
      if (i !== this.currentSlideIndex)
        this.children[i].style.display = 'none';
      else 
        this.children[i].style.display = '';
    }
  }
  
  setNewTimeout() {
    return setInterval(this.onNextClick.bind(this), 8000);
  }
  
  setModStyles() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].style.transition = '0.2s ease-in';
      this.children[i].style.opacity = '1';
    }
  }
}