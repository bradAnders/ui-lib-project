// import './test.css';
import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';

// Create a tooltip!
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();


// Create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});


// Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


// Create Snackbar
const snackbar = new Snackbar();
snackbar.init();
snackbar.show("You clicked me :)");

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', e => {
  snackbar.show("You clicked me :)");
});
