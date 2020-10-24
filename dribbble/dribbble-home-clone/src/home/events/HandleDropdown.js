const handleDropdownShow = ({ target }) => {
  const dropDownReference = target.dataset.js;
  const dropdown = document.querySelector(dropDownReference);

 if(dropdown) return dropdown.style.display = 'grid';
};

const handleDropdownHide = ({ target }) => {
  const dropDownReference = target.dataset.js;
  const dropdown = document.querySelector(dropDownReference);

 if(dropdown) return dropdown.style.display = 'none';
};

export { handleDropdownShow, handleDropdownHide };