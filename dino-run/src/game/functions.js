export const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.round(Math.random() * (max - min + 1) + min);
};

export const isIntervalOverlapping = (s1, e1, s2, e2)  => {
	if ( s1 > e2 || s2 > e1) return false;
	else return true;
}


export const isColliding = (player, entity) => {
	let playerCoord = player.getBoundingClientRect();
	let entityCoord = entity.getBoundingClientRect();

	let xOverlap = isIntervalOverlapping(playerCoord.left, playerCoord.right, entityCoord.left, entityCoord.right);
	let yOverlap = isIntervalOverlapping(playerCoord.bottom, playerCoord.top, entityCoord.bottom, entityCoord.top);

	if (xOverlap && yOverlap) {
		return true
	} else {
		return false
	}
}