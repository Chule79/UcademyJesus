export const getData = async (a) => {
  const data = await fetch(`http://localhost:8080/${a}`);
  const res = await data.json();
  return res;
};
