const idGenerator = () => {
  let id = 555;
  return () => {
    id += 1;
    return id;
  };
};

export default idGenerator;
