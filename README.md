## Goals
* Implement browser application using microservices
* Application should be isomorphic
* javascript should be loaded on demand

## Getting Started

### Install
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [docker](https://docs.docker.com/get-docker/)
* **skip for Mac and Windows** [docker-compose](https://docs.docker.com/compose/install/)

```bash
# clone repository
git clone https://github.com/osvarychevskyi/page-assembly-varnish.git
# run cluster
docker-compose up
```
#### GoTo: **http://localhost:8080**



## Concepts
###Hosts and ESI Fragments
* **Host** is an http service that returns valid html document (e.g. meta tags)
* **Host** and **ESI Fragment** implement **SSR** (Server Side Rendering)
* **Host** and **ESI Fragment** response can contain `<esi:include />` element
* **Fragment** returns valid element of html document 
* **Fragment** contains all dependencies in http body response
    * **js** is defined as `<script />` element
    * **css** is defined as **CSS in JS** or **Inline Style**

### Tailoring ESI Fragments with Varnish
* What is ESI? https://www.keycdn.com/support/edge-side-includes
* What is varnish? https://varnish-cache.org/docs/6.6/tutorial/introduction.html
* ESI in varnish https://varnish-cache.org/docs/6.6/users-guide/esi.html
* Grace mode and keep https://varnish-cache.org/docs/trunk/users-guide/vcl-grace.html

### Fragment Dependencies
* How to share common dependencies
* Event producer and consumer
