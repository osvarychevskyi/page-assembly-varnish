vcl 4.0;

backend default {
  .host = "page-assembly:9000";
}
backend content {
  .host = "content:9001";
}
backend news {
  .host = "news:9002";
}

sub vcl_recv {
    if (req.esi_level > 0 && req.url == "/") {
        set req.url = req_top.url;
    }

    if (req.http.host ~ "content") {
        set req.backend_hint = content;
    } elseif (req.http.host ~ "news") {
        set req.backend_hint = news;
    }
}

sub vcl_miss {
    # To prevent 304 client responses on hit-for-miss from page-assembly
    unset req.http.If-None-Match;
    unset req.http.If-Modified-Since;
}

sub vcl_backend_response {
    set beresp.do_esi = true;
}