function computeErrorThreshold(err1, err2) {
  if (err1 === null || err2 === null) {
    return null;
  }
  if (Math.abs(err1) === Math.abs(err2)) {
    return `±${Math.abs(err1)}`;
  }
  const max = Math.max(err1, err2);
  const min = Math.min(err1, err2);
  return `+${max}/${min}`;
}

exports.transformOnePlanet = function(planet) {
  return {
    name: planet.pl_name,
    discoveryMethod: planet.pl_discmethod,
    facility: planet.pl_facility,
    neighbors: planet.pl_pnum,
    orbitsInDays: planet.pl_orbper,
    orbitsIndaysError: computeErrorThreshold(
      planet.pl_orbpererr1,
      planet.pl_orbpererr2
    ),
    lastUpdate: planet.rowupdate,
    hostStar: planet.pl_hostname,
  };
};
