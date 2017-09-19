export const fetchBenches = data => {
  return $.ajax({
    method: "GET" ,
    url: 'api/benches',
    data
  });
};
