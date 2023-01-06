const isIntersecting = (entry) =>{
  return entry.isIntersecting;
};

const action = (e) => {
  const container = e.target // div
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  //cargar imagen
  imagen.src = url;

  
  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
  entries.filter(isIntersecting).map(action);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};