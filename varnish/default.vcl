vcl 4.0;

backend default {
  .host = "cms-app:9001";
}
backend cms-app {
  .host = "cms-app:9001";
}
backend news-app {
  .host = "news-app:9002";
}
backend header-app {
  .host = "header-app:9004";
}

sub vcl_recv {

    if (req.url == "/" || req.url ~ "^\/cms\/") {
        set req.backend_hint = cms-app;
    } elseif (req.url ~ "^\/news\/") {
        set req.backend_hint = news-app;
    } elseif (req.url ~ "^\/header\/") {
        set req.backend_hint = header-app;
    }
}

sub vcl_miss {
    # To prevent 304 client responses on hit-for-miss from page-assembly
    unset req.http.If-None-Match;
    unset req.http.If-Modified-Since;
}

sub vcl_backend_response {
    set beresp.do_esi = true;
    set beresp.ttl = 0s;
}