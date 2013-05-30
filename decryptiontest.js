var crypto = require('crypto');

var key = "byzq4j0jpsjxmbnqk8w7wif4v"
var hash = crypto.createHash('md5')
hash.update(key,'utf8')
var digest = hash.digest('utf8')

var parts = process.argv[2].split("--")
var encrypted = parts[0]; var iv = parts[1];
var decipher = crypto.createDecipheriv('aes-128-cbc', digest, new Buffer(iv,"hex"))
var decrypted = decipher.update(encrypted, "hex", "utf8")
decrypted += decipher.final("utf8")
console.log(decrypted)