const removeAllOthersClasses = categoryList => Array.from(categoryList.children)
  .map(listItem => listItem.classList.remove('active'));

const useHandleCategory = ({ target }) => {
  const categoryList = document.querySelector('.category-list');

  removeAllOthersClasses(categoryList);

  target.classList.add('active');
};

export default useHandleCategory;