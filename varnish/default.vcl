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

    #forward only /*.srv{:param}
    if (req.url ~ "^\/(.*?)\.srv*") {

        #forward to html applications
        if (req.url ~ "^\/content\.srv") {
            set req.backend_hint = content;
        } elseif (req.url ~ "^\/news\.srv") {
            set req.backend_hint = news;
        }

        #process <esi:include> requests
        if (req.esi_level > 0) {
            #in case of html request add browser get params on the top
            if (req.url ~ "^.*\.(html)$" && req_top.url ~ "\?") {
                set req.url = req.url + regsub(req_top.url,"(.*?)\?", "?");
            #in case of app request add the whole browser path on the top
            } else if (req.url !~ "^.*\.(html)$") {
                set req.url = regsub(req.url, "\/$", "") + req_top.url;
            }
        }

        #remove /*.srv from /*.srv{:param}
        set req.url = regsub(req.url, "^\/(.*?)\.srv*", "");
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