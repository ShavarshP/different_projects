const setId = () => {
  localStorage.setItem("id", 555);
  return 555;
};
const getId = (id) => {
  localStorage.setItem("id", id + 1);
  return id + 1;
};
const idGenerator = () => {
  let id = localStorage.getItem("id")
    ? getId(Number(localStorage.getItem("id")))
    : setId();
  return () => {
    id += 1;
    return id;
  };
};

export default idGenerator;
