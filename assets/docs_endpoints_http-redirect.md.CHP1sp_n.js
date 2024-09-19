import{_ as e,c as t,o,a4 as s}from"./chunks/framework.ttppV29E.js";const f=JSON.parse('{"title":"HTTP Redirect","description":"","frontmatter":{},"headers":[],"relativePath":"docs/endpoints/http-redirect.md","filePath":"docs/endpoints/http-redirect.md","lastUpdated":1726753519000}'),a={name:"docs/endpoints/http-redirect.md"},d=s('<h1 id="http-redirect" tabindex="-1">HTTP Redirect <a class="header-anchor" href="#http-redirect" aria-label="Permalink to &quot;HTTP Redirect&quot;">​</a></h1><p>You do not typically need to use this task in addition to the <a href="./http-response.html">HTTP Response task.</a> If you are using both, it is best to set up filters to decide which one is used by the endpoint.</p><p>The HTTP Redirect task is typically the last task in an endpoint, and is responsible for forwarding the user to a new page or website after the endpoint completes. An example of its use may be sending the user to a Thank You page after they fill out a survey on your website.</p><p>This task required a <code>Redirect URL</code> and a JSON body. The redirect url is where the user will be sent to after the endpoint completes. This should be a full URL, including the <code>http://</code> or <code>https://</code> prefix. For example: <code>https://www.example.com/surveys/thankyou.html</code></p><p>In most cases, you can simply use an empty object (<code>{}</code>) for the body, unless you know that you need to include data here.</p>',5),i=[d];function r(n,c,p,h,l,u){return o(),t("div",null,i)}const m=e(a,[["render",r]]);export{f as __pageData,m as default};
