import{_ as e,c as s,o as t,a4 as a}from"./chunks/framework.ttppV29E.js";const g=JSON.parse('{"title":"HTTP Response","description":"","frontmatter":{},"headers":[],"relativePath":"docs/endpoints/http-response.md","filePath":"docs/endpoints/http-response.md","lastUpdated":1726753519000}'),i={name:"docs/endpoints/http-response.md"},n=a(`<h1 id="http-response" tabindex="-1">HTTP Response <a class="header-anchor" href="#http-response" aria-label="Permalink to &quot;HTTP Response&quot;">​</a></h1><p>This page is about the task for returning data from the endpoint. If you are looking to handle the response of the <a href="./http-request.html">HTTP Request</a> task, please <a href="./http-response-handler.html">see HTTP Response Handler instead.</a></p><p>You do not typically need to use this task in addition to the <a href="./http-redirect.html">HTTP Redirect task.</a> If you are using both, it is best to set up filters to decide which one is used by the endpoint.</p><p>The HTTP Response task is typically the last task in an endpoint, and is responsible for defining what data or information is returned to the calling application. There are only 3 required fields to complete for this task. The data format, status code, and the body.</p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;Format&quot;">​</a></h2><p><code>Format</code> simply chooses what data format you&#39;re sending back. Your data should match the format you choose, and this may be defined by the application that calls the endpoint. For example, if your application expects JSON, then you should select JSON here.</p><h2 id="status-code" tabindex="-1">Status Code <a class="header-anchor" href="#status-code" aria-label="Permalink to &quot;Status Code&quot;">​</a></h2><p><code>Status Code</code> is an HTTP status code. Typically, if everything went well, this will be <code>200</code>, or if things went wrong, it will be <code>400</code>. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">You can find a full list of status codes on the Mozilla website.</a></p><h2 id="headers" tabindex="-1">Headers <a class="header-anchor" href="#headers" aria-label="Permalink to &quot;Headers&quot;">​</a></h2><p>Multiple <code>Headers</code> can be optionally appended to your http response. Each header can have a <code>Key</code> and one or more <code>Values</code>. For example:</p><ol><li><p><strong>Single Value Header</strong>:</p><ul><li><strong>Key</strong>: <code>Location</code></li><li><strong>Values</strong>: <code>https://example.com</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Location: https://example.com</span></span></code></pre></div></li><li><p><strong>Multiple Value Header</strong>:</p><ul><li><strong>Key</strong>: <code>Link</code></li><li><strong>Values</strong>: <code>&lt;https://api.example.com/page/1&gt;; rel=&quot;prev&quot;</code> <code>&lt;https://api.example.com/page/3&gt;; rel=&quot;next&quot;</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Link: &lt;https://api.example.com/page/1&gt;; rel=&quot;prev&quot;</span></span>
<span class="line"><span>Link: &lt;https://api.example.com/page/3&gt;; rel=&quot;next&quot;</span></span></code></pre></div></li></ol><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>You can view the headers that are set by enabling <code>Debug Mode</code> on your endpoint and examining the <code>Endpoint Task Values Resolved</code> in the metrics.</p></div><h2 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h2><p>Finally, the body should be the data you wish to return. This should match the <code>Format</code> you have selected, but otherwise the content is completely flexible.</p><p>If you omit this task, a basic response with the status code is returned instead, that looks like the following JSON array:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;format&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;statusCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;contentType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;redirectUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,16),o=[n];function l(p,h,d,r,c,u){return t(),s("div",null,o)}const y=e(i,[["render",l]]);export{g as __pageData,y as default};
