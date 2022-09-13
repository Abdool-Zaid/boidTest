consolStartup=(e)=>{
    let clickEvent = new Event('click');
    // document.querySelector('.btn-close').dispatchEvent(clickEvent)
    window.dispatchEvent('Control'+'Shift'+'c')
    alert('clicked')
}
window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
console.log(e)
  }, false);
  