config = {
  'mongodb': {
    'database': 'uidd2019_groupK',
    'host': 'localhost',
    'password': 'dj3mammn',
    'user': 'uidd2019_groupK',
  },
  'mysql': {
    'database': 'uidd2019_groupK_fbtest',
    'host': 'localhost',
    'password': 'CQKvRpeGLjLagJKk',
    'user': 'uidd2019_groupK',
  },
  "port": 11500,
	"ssl":{
    "ca": "/home/uidd2019/ssl/ca_bundle.crt",
    "key": "/home/uidd2019/ssl/private.key",
    "cert": "/home/uidd2019/ssl/certificate.crt"
  }
}

module.exports = config;
