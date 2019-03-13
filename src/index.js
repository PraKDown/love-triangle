/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    if (preferences[i] == 0) continue;
    const first = preferences[i];
    const second = preferences[first-1];
    if (second-1 == i) continue;
    const third = preferences[second-1];
    if(third - 1 == i) {
			count++;
      preferences[first-1] = 0
      preferences[second-1] = 0
  	}
	}
	return count;	
};
