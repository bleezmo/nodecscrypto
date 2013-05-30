var crypto = require('crypto');
var uuid = require('node-uuid');

var iv = new Array(16);
var digest = new Array(16);
var key = "byzq4j0jpsjxmbnqk8w7wif4v";

uuid.v4(null, iv, 0);

var hash = crypto.createHash('md5');
hash.update(key,'utf8');
var digest = hash.digest('hex');
console.log(digest);

var cipher = crypto.createCipheriv('aes-128-cbc', new Buffer(digest,'hex'), new Buffer(iv));
var encrypted = cipher.update("blah blah blah", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted+"--"+new Buffer(iv).toString('hex'));

var decipher = crypto.createDecipheriv('aes-128-cbc', new Buffer(digest,'hex'), new Buffer(iv));
var decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);