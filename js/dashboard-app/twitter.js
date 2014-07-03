var request = require("request");
var crypto = require("crypto");
var moment = require("moment");

var oauth_consumer_key = "RWJEhXKNwT6Q5yk5bCnR9Mv2P";
var oauth_nonce;
crypto.randomBytes(32, function(ex, buf) {
  oauth_nonce =  buf;
});
var oauth_signature_method = "HMAC-SHA1";
var oauth_timestamp = moment().format('X');
var oauth_token = "389137596-Lwo6yDIEdeKg9DQVJKKHX9fvraVk9VAOVSwIfHN6";
var oauth_version = "1.1";
var signing_key = "nqvGRDRwjJ4Wwdw1YsG7ov9WodmepW1MpVXhYP0HYTvXltxkyz&8FnDuSTouRJC71srfO1ul9Z51FXP8cAbk7LvwSWheLqDE";

var method = "GET";
var url = "https%3A%2F%2Fapi.twitter.com%2F1.1%2Fstatuses%2Fhome_timeline.json";
var sign_base = method+"&"+url+"&"+encodeURIComponent("oauth_consumer_key="+oauth_consumer_key+"&oauth_nonce="+oauth_nonce+
	"&oauth_signature_method="+oauth_signature_method+"&oauth_timestamp="+oauth_timestamp+"&oauth_token="+oauth_token+
	"&oauth_version="+oauth_version);

var oauth_signature = encodeURIComponent(crypto.createHmac("sha1",signing_key).update(sign_base).digest("base64"));

request({
  uri: "https://api.twitter.com/1.1/statuses/home_timeline.json",
  method: "GET",
  authorization: "OAuth oauth_consumer_key="+oauth_consumer_key+", oauth_nonce="+oauth_nonce+", oauth_signature="+
  oauth_signature+", oauth_signature_method="+oauth_signature_method+", oauth_timestamp="+oauth_timestamp+
  ", oauth_token="+oauth_token+", oauth_version="+oauth_version
}, function(error, response, body) {
  console.log(body);
});