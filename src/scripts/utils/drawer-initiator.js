/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content, exit }) {
    button.addEventListener("click", (event) => {
      this._toogleDrawer(event, drawer);
    });
    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
    exit.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },
  _toogleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};
export default DrawerInitiator;
