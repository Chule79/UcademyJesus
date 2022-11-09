export const getData = async () => {
  const data = await fetch(`http://localhost:8080/alumnos`);
  const res = await data.json();
  return res;
};
