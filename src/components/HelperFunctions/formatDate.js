export const formatDate = (propDate) => {
  const release_date = propDate;
  const d = new Date(release_date);
  const date = d.getUTCDate();
  const month = d.getUTCMonth() + 1; // Since getUTCMonth() returns month from 0-11 not 1-12
  const year = d.getUTCFullYear();
  const releaseDate = `${date}/${month}/${year}`;
  return releaseDate;
};
