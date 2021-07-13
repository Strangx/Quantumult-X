/**
 * @fileoverview Example to parse the resource to the format of Quantumult X.
 *
 * @supported Quantumult X (v1.0.8-build253)
 */


// $resource, $notify(title, subtitle, message)
// HTTP reqeust and persistent storage related APIs are not supported in resource parser.

// $resource.link contains the original URL of the resource or the path if the resource is local.
// $resource.content contains the response(UTF8) from the URL .

// $done({error : "error description"});
// $done({content : "the modified content"});

var 🇸🇬 = "shadowsocks= sg-sng-st003.prod.surfshark.com:44467, method=aes-256-gcm, password=hWPYUXPGNxLxyqW6jC2FnueU, fast-open=false, udp-relay=false, tag=🇸🇬 ➤ Singapore";
var 🇺🇸 = "shadowsocks=92.119.177.23:44467, method=aes-256-gcm, password=hWPYUXPGNxLxyqW6jC2FnueU, fast-open=false, udp-relay=false, tag=🇺🇸 ➤ NewYork";
var total = 🇸🇬 + "\n" + 🇺🇸;
$done({content : total});
$done({error : "error description"});