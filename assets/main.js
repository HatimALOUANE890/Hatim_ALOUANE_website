// main.js - menu mobile & small helpers
document.addEventListener('DOMContentLoaded', function(){
  // year
  const yearEls = ['year','year-2','year-3','year-4'];
  yearEls.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // nav toggles (multiple pages)
  const toggles = [
    {btnId: 'nav-toggle', navId: 'nav'},
    {btnId: 'nav-toggle-2', navId: 'nav-2'},
    {btnId: 'nav-toggle-3', navId: 'nav-3'},
    {btnId: 'nav-toggle-4', navId: 'nav-4'}
  ];

  toggles.forEach(({btnId, navId}) => {
    const btn = document.getElementById(btnId);
    const nav = document.getElementById(navId);
    if(btn && nav){
      btn.addEventListener('click', () => {
        if(nav.style.display === 'flex') {
          nav.style.display = '';
        } else {
          nav.style.display = 'flex';
          nav.style.flexDirection = 'column';
          nav.style.gap = '12px';
        }
      });
    }
  });
});

// contact form: open mailto with prefilled subject/body
function sendMail(e){
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value || '');
  const email = encodeURIComponent(document.getElementById('email').value || '');
  const message = encodeURIComponent(document.getElementById('message').value || '');
  const subject = encodeURIComponent('Contact via portfolio — ' + (name || ''));
  const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:hatim.alouane@centrale-casablanca.ma?subject=${subject}&body=${body}`;
  return false;
}
