const details = document.querySelectorAll('details');

details.forEach(detail => {
  const detailContent = detail.querySelector('div');
  const detailClosedHeight = detail.scrollHeight;
  // open the details to get the height of the content
  detail.open = true;
  // pass it to the the element as CSS property
  detailContent.style.setProperty('--details-content-height-open', detailContent.scrollHeight + 'px');
  detail.style.setProperty('--details-height-open', detailContent.scrollHeight + detailClosedHeight + 'px');
  // close the details again
  detail.open = false;

  detailContent.style.setProperty('--details-content-height-closed', detailContent.scrollHeight + 'px');
  detail.style.setProperty('--details-height-closed', detailClosedHeight + 'px');

  detail.addEventListener('click', (ev) => {
    const container = ev.target.parentElement;
    // get time of transition from CSS property
    const timeout = getComputedStyle(container.querySelector('div')).getPropertyValue('--details-transition-time');
    
    // we can't use [open] as it will be only removed after the transition
    container.classList.toggle('is--open');
   
    // remove the open attribute once the transition is done, because otherwise we won't see the transition
    if (container.open) {
      ev.preventDefault();
      setTimeout(function() {
        container.open = false;
      }, parseInt(timeout))
    }
  })
});