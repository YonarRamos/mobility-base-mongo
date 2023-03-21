
class UserEntity {
	id;
	name;
	nickname;
	email;
	password;
}

class PostEntity {
	id;
	user;
	mediaType;
	timestamp;
}

module.exports = {
	entity: {
		UserEntity,
		PostEntity,
	}
}