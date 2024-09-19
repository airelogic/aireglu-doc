import{_ as n,c as s,o as a,a4 as t}from"./chunks/framework.ttppV29E.js";const m=JSON.parse('{"title":"Batch Invocation","description":"","frontmatter":{},"headers":[],"relativePath":"docs/quickstart/batchInvocation.md","filePath":"docs/quickstart/batchInvocation.md","lastUpdated":1726753519000}'),p={name:"docs/quickstart/batchInvocation.md"},e=t(`<h1 id="batch-invocation" tabindex="-1">Batch Invocation <a class="header-anchor" href="#batch-invocation" aria-label="Permalink to &quot;Batch Invocation&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>It is possible to invoke an endpoint multiple times by using AireGlu&#39;s, asynchronous, batch processing functionality.</p><h2 id="access-to-this-feature" tabindex="-1">Access to this feature <a class="header-anchor" href="#access-to-this-feature" aria-label="Permalink to &quot;Access to this feature&quot;">​</a></h2><p>Your tenant/username must be added to the <code>ALLOWED_ASYNC_USERS</code> environment variable, you can add multiple users as a semicolon separated list.</p><h2 id="how-to-invoke" tabindex="-1">How to invoke <a class="header-anchor" href="#how-to-invoke" aria-label="Permalink to &quot;How to invoke&quot;">​</a></h2><p>Within your endpoint, add a HTTP Request Task. Make a POST request to the AireGlu Async Service - <code>https://my-async.aireglu.com/Api/batch/{username}/{endpointName}/{environmentOrVersion}</code></p><p>The request body is a JSON object containing:</p><ul><li>the name of the callback endpoint to be invoked</li><li><code>request</code> array containing the required input to be passed into the batched endpoint invocations</li><li>environment or version of the callback endpoint</li></ul><p>With a valid payload, the Async Api Endpoint will respond with a <code>202 Accepted</code>.</p><h2 id="how-authentication-works" tabindex="-1">How authentication works <a class="header-anchor" href="#how-authentication-works" aria-label="Permalink to &quot;How authentication works&quot;">​</a></h2><p>The endpoint to be invoked via batch, should be authenticated as you would normally for any other endpoint. The callback endpoint will be run by the batch functionality regardless of its authentication status, however, it should have authentication set so that it is protected from someone running it directly.</p><h2 id="how-will-i-monitor-the-requests" tabindex="-1">How will I monitor the requests? <a class="header-anchor" href="#how-will-i-monitor-the-requests" aria-label="Permalink to &quot;How will I monitor the requests?&quot;">​</a></h2><p>Usage data will be populated but it will be very difficult to follow. We strongly recommend ensuring that debug mode is turned off for the batch invoke and callback endpoints to minimise the amount of usage data (transaction data) stored when an endpoint is batch-invoked. The callback endpoint can be used to collect information about what the outcome of each invocation was. When calling the Async API you have the option to supply a batch transaction id (if none is supplied an id is automatically generated), the transaction id is made available in the input of the callback endpoint.</p><h2 id="example-endpoint-definitions" tabindex="-1">Example endpoint definitions <a class="header-anchor" href="#example-endpoint-definitions" aria-label="Permalink to &quot;Example endpoint definitions&quot;">​</a></h2><p>Here is an example endpoint definition that you can use to experiment with.</p><h1 id="batch-endpoint" tabindex="-1">Batch endpoint <a class="header-anchor" href="#batch-endpoint" aria-label="Permalink to &quot;Batch endpoint&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Versions:</span></span>
<span class="line"><span>- Input:</span></span>
<span class="line"><span>  Method: POST</span></span>
<span class="line"><span>  InputMode: JSON</span></span>
<span class="line"><span>  InputSource: Body</span></span>
<span class="line"><span>  Schema: &gt;-</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>   	 &quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>   	 &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>   	 &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>   	 &quot;properties&quot;: {</span></span>
<span class="line"><span>   		 &quot;test&quot;: {</span></span>
<span class="line"><span>   			 &quot;type&quot;: &quot;string&quot;,</span></span>
<span class="line"><span>   			 &quot;minLength&quot;: 1</span></span>
<span class="line"><span>   		 }</span></span>
<span class="line"><span>   	 },</span></span>
<span class="line"><span>   	 &quot;required&quot;: [</span></span>
<span class="line"><span>   		 &quot;test&quot;</span></span>
<span class="line"><span>   	 ]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>  XmlSchemas:</span></span>
<span class="line"><span>  ErrorEmail: &#39;&#39;</span></span>
<span class="line"><span>  StopOnTaskFailure: true</span></span>
<span class="line"><span>  Tasks:</span></span>
<span class="line"><span>  - Behaviour: Response</span></span>
<span class="line"><span>	RequestContext:</span></span>
<span class="line"><span>	ResponseHandlerContext:</span></span>
<span class="line"><span>	EmailContext:</span></span>
<span class="line"><span>	FaxContext:</span></span>
<span class="line"><span>	MeshContext:</span></span>
<span class="line"><span>	SmsContext:</span></span>
<span class="line"><span>	JobContext:</span></span>
<span class="line"><span>	ResponseContext:</span></span>
<span class="line"><span>  	OutputMode: JSON</span></span>
<span class="line"><span>  	MapType: Path</span></span>
<span class="line"><span>  	XsltParameters: []</span></span>
<span class="line"><span>  	StatusCode: 200</span></span>
<span class="line"><span>  	RetainStatusCode: false</span></span>
<span class="line"><span>  	Template: &gt;-</span></span>
<span class="line"><span>    	{</span></span>
<span class="line"><span>   		 &quot;test&quot;: &quot;--*test*--&quot;</span></span>
<span class="line"><span>    	}</span></span>
<span class="line"><span>  	Paths:</span></span>
<span class="line"><span>    	test: $.test</span></span>
<span class="line"><span>  	PathOrigins: {}</span></span>
<span class="line"><span>  	Functions: {}</span></span>
<span class="line"><span>  	FunctionLocations:</span></span>
<span class="line"><span>	RedirectContext:</span></span>
<span class="line"><span>	MappingContext:</span></span>
<span class="line"><span>	PdfContext:</span></span>
<span class="line"><span>	AdapterContext:</span></span>
<span class="line"><span>	SftpContext:</span></span>
<span class="line"><span>	JwtContext:</span></span>
<span class="line"><span>	Tests: []</span></span>
<span class="line"><span>	Filters: []</span></span>
<span class="line"><span>	Label: &#39;&#39;</span></span>
<span class="line"><span>	DataOrigin: -1</span></span>
<span class="line"><span>	UseCRLFLineEndings: false</span></span>
<span class="line"><span>  AuthenticationContexts: []</span></span>
<span class="line"><span>  Version: 1</span></span>
<span class="line"><span>  Active: true</span></span>
<span class="line"><span>  PersistTransactionData: false</span></span>
<span class="line"><span>Name: batch-test</span></span>
<span class="line"><span>Environments:</span></span>
<span class="line"><span>  Staging: 1</span></span>
<span class="line"><span>  Production: 1</span></span></code></pre></div><h1 id="callback-endpoint" tabindex="-1">Callback endpoint <a class="header-anchor" href="#callback-endpoint" aria-label="Permalink to &quot;Callback endpoint&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Versions:</span></span>
<span class="line"><span>- Input: &gt;-</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>   	 &quot;success&quot;: true,</span></span>
<span class="line"><span>   	 &quot;errors&quot;: [],</span></span>
<span class="line"><span>   	 &quot;originalInput&quot;: {},</span></span>
<span class="line"><span>   	 &quot;endpointOutput&quot;: {}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>  Method: POST</span></span>
<span class="line"><span>  InputMode: Callback</span></span>
<span class="line"><span>  InputSource: Body</span></span>
<span class="line"><span>  Schema: &gt;-</span></span>
<span class="line"><span>	{</span></span>
<span class="line"><span>   	 &quot;$schema&quot;: &quot;http://json-schema.org/draft-04/schema#&quot;,</span></span>
<span class="line"><span>   	 &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span>   	 &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>   	 &quot;properties&quot;: {</span></span>
<span class="line"><span>   		 &quot;success&quot;: {</span></span>
<span class="line"><span>   			 &quot;type&quot;: &quot;boolean&quot;</span></span>
<span class="line"><span>   		 },</span></span>
<span class="line"><span>   		 &quot;errors&quot;: {</span></span>
<span class="line"><span>   			 &quot;type&quot;: &quot;array&quot;,</span></span>
<span class="line"><span>   			 &quot;items&quot;: {</span></span>
<span class="line"><span>   				 &quot;type&quot;: &quot;string&quot;</span></span>
<span class="line"><span>   			 }</span></span>
<span class="line"><span>   		 },</span></span>
<span class="line"><span>   		 &quot;originalInput&quot;: {</span></span>
<span class="line"><span>   			 &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>   			 &quot;properties&quot;: {},</span></span>
<span class="line"><span>   			 &quot;required&quot;: []</span></span>
<span class="line"><span>   		 },</span></span>
<span class="line"><span>   		 &quot;endpointOutput&quot;: {</span></span>
<span class="line"><span>   			 &quot;type&quot;: &quot;object&quot;,</span></span>
<span class="line"><span>   			 &quot;properties&quot;: {},</span></span>
<span class="line"><span>   			 &quot;required&quot;: []</span></span>
<span class="line"><span>   		 }</span></span>
<span class="line"><span>   	 },</span></span>
<span class="line"><span>   	 &quot;required&quot;: [</span></span>
<span class="line"><span>   		 &quot;success&quot;,</span></span>
<span class="line"><span>   		 &quot;originalInput&quot;</span></span>
<span class="line"><span>   	 ]</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>  XmlSchemas:</span></span>
<span class="line"><span>  ErrorEmail: &#39;&#39;</span></span>
<span class="line"><span>  StopOnTaskFailure: true</span></span>
<span class="line"><span>  Tasks:</span></span>
<span class="line"><span>  - Behaviour: Response</span></span>
<span class="line"><span>	RequestContext:</span></span>
<span class="line"><span>	ResponseHandlerContext:</span></span>
<span class="line"><span>	EmailContext:</span></span>
<span class="line"><span>	FaxContext:</span></span>
<span class="line"><span>	MeshContext:</span></span>
<span class="line"><span>	SmsContext:</span></span>
<span class="line"><span>	JobContext:</span></span>
<span class="line"><span>	ResponseContext:</span></span>
<span class="line"><span>  	OutputMode: JSON</span></span>
<span class="line"><span>  	MapType: Path</span></span>
<span class="line"><span>  	XsltParameters: []</span></span>
<span class="line"><span>  	StatusCode: 200</span></span>
<span class="line"><span>  	RetainStatusCode: false</span></span>
<span class="line"><span>  	Template: &gt;-</span></span>
<span class="line"><span>    	{</span></span>
<span class="line"><span>   		 &quot;success&quot;: &quot;--*success*--&quot;</span></span>
<span class="line"><span>    	}</span></span>
<span class="line"><span>  	Paths:</span></span>
<span class="line"><span>    	success: $.success</span></span>
<span class="line"><span>  	PathOrigins: {}</span></span>
<span class="line"><span>  	Functions: {}</span></span>
<span class="line"><span>  	FunctionLocations:</span></span>
<span class="line"><span>	RedirectContext:</span></span>
<span class="line"><span>	MappingContext:</span></span>
<span class="line"><span>	PdfContext:</span></span>
<span class="line"><span>	AdapterContext:</span></span>
<span class="line"><span>	SftpContext:</span></span>
<span class="line"><span>	JwtContext:</span></span>
<span class="line"><span>	Tests: []</span></span>
<span class="line"><span>	Filters: []</span></span>
<span class="line"><span>	Label: &#39;&#39;</span></span>
<span class="line"><span>	DataOrigin: -1</span></span>
<span class="line"><span>	UseCRLFLineEndings: false</span></span>
<span class="line"><span>  AuthenticationContexts: []</span></span>
<span class="line"><span>  Version: 1</span></span>
<span class="line"><span>  Active: true</span></span>
<span class="line"><span>  PersistTransactionData: false</span></span>
<span class="line"><span>Name: async-callback-test</span></span>
<span class="line"><span>Environments:</span></span>
<span class="line"><span>  Staging: 1</span></span>
<span class="line"><span>  Production: 1</span></span></code></pre></div>`,20),i=[e];function l(o,c,u,r,d,h){return a(),s("div",null,i)}const b=n(p,[["render",l]]);export{m as __pageData,b as default};
