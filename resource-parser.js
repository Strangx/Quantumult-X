/**
 * @Strange Test.
 *
 * @supported Quantumult X
 */


// $resource, $notify(title, subtitle, message)
// HTTP reqeust and persistent storage related APIs are not supported in resource parser.

// $resource.link contains the original URL of the resource or the path if the resource is local.
// $resource.content contains the response(UTF8) from the URL .

// $done({error : "error description"});
// $done({content : "the modified content"});

var Singapore = "shadowsocks=sg-sng-st003.prod.surfshark.com:44467, method=aes-256-gcm, password=hWPYUXPGNxLxyqW6jC2FnueU, fast-open=false, udp-relay=false, tag=🇸🇬";
var United States = "shadowsocks=92.119.177.23:44467, method=aes-256-gcm, password=hWPYUXPGNxLxyqW6jC2FnueU, fast-open=false, udp-relay=false, tag=🇺🇸";
var total = Singapore + "\n" + United States;
$done({content : total});
