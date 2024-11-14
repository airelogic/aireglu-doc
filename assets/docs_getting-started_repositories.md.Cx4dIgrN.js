import{_ as e,c as t,o,a4 as i}from"./chunks/framework.ttppV29E.js";const f=JSON.parse('{"title":"Repositories","description":"","frontmatter":{},"headers":[],"relativePath":"docs/getting-started/repositories.md","filePath":"docs/getting-started/repositories.md","lastUpdated":1731575958000}'),a={name:"docs/getting-started/repositories.md"},n=i(`<h1 id="repositories" tabindex="-1">Repositories <a class="header-anchor" href="#repositories" aria-label="Permalink to &quot;Repositories&quot;">​</a></h1><p>Repositories provide a way for you to use your own storage for saving endpoints. This allows for you to handle your own backups, imports, version control, etc right from your favourite Git provider. Some examples of Git providers are <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>, <a href="https://bitbucket.org" target="_blank" rel="noreferrer">Bitbucket</a>, and <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer">GitLab</a>, although there are many more, including self-hosted options.</p><p>To use the repository sync feature, your tenant must have this option enabled. Please request this using <a href="mailto:support@airelogic.com" target="_blank" rel="noreferrer">support@airelogic.com</a></p><h2 id="adding-a-repository" tabindex="-1">Adding a repository <a class="header-anchor" href="#adding-a-repository" aria-label="Permalink to &quot;Adding a repository&quot;">​</a></h2><p>The process of adding a repository is reasonably simple. You&#39;ll need to know your repository URL (you can find this out from your provider), and any credentials needed to read from it. You should also ensure that this repository contains a valid AireGlu file structure (see Repository Layout below).</p><ul><li>Go to the Repositories section, and click the <code>+</code> button at the top right corner of the page</li><li>Choose your authentication method (see below for more information on each)</li><li>Enter the repository URL (starting with <code>https://</code> or <code>git@</code>, depending on if you&#39;re using SSH authentication)</li><li>Select the repository branch (will default to master if not specified)</li><li>If you are using auto sync and want to be notified of any problems, enter your email address in <code>Error email</code></li><li>If you want to automatically pull in changes that you make in git, check the <code>Auto Sync Repository</code> option. If you want to do this manually, make sure this option is not ticked.</li><li>If you are using authentication then enter the appropriate details (see below)</li><li>Click <code>Test and Save</code> to verify AireGlu can connect to your repository</li></ul><h3 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h3><p>It is likely, and reccomended, that your repository requires some form of authentication before it can be used. There are 3 options available to you for this. None, Credentials, and SSH.</p><h4 id="none" tabindex="-1">None <a class="header-anchor" href="#none" aria-label="Permalink to &quot;None&quot;">​</a></h4><p>While not recommended, you may use a repository that does not require any authentication and is publicly readable and writable. There is nothing extra to configure here, but be aware that anyone will be able to see or change your endpoints if they find your repository.</p><h4 id="credentials" tabindex="-1">Credentials <a class="header-anchor" href="#credentials" aria-label="Permalink to &quot;Credentials&quot;">​</a></h4><p>Credentials allows for the use of a username and password to login to the repository. AireGlu will act as the user whose credentials have been used, and will appear on the commit history as that user.</p><h4 id="ssh" tabindex="-1">SSH <a class="header-anchor" href="#ssh" aria-label="Permalink to &quot;SSH&quot;">​</a></h4><p>Finally authentication can be completed with the use of a public and private key pair, using SSH. This is the most complex to set up, as it requires generating a key pair, adding the public key to your Git repository, and the private key to AireGlu. It is reccomended to ensure this private key is not used anywhere else for security reasons. The benefit of this approach is that each device that uses SSH to connect can have its own key that can be revoked if it gets compromised, without affecting any of the other devices.</p><p>When using SSH authentication, your repository url should begin with <code>git@</code> or something similar. It should not start with <code>https://</code>.</p><p><a href="https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://support.atlassian.com/bitbucket-cloud/docs/set-up-an-ssh-key/" target="_blank" rel="noreferrer">Bitbucket</a> both have guides on how to set up a key for your account as examples, but most providers support this feature, and will offer some support in setting it up.</p><h2 id="repository-layout" tabindex="-1">Repository Layout <a class="header-anchor" href="#repository-layout" aria-label="Permalink to &quot;Repository Layout&quot;">​</a></h2><p>When connecting a repository to AireGlu, it expects a specific file structure to be in place to correctly sync your endpoints. These files are expected to be in a specific format that AireGlu can use. The easiest way to ensure this is correct is to export any current endpoints either to YAML or JSON first.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> + Endpoints/</span></span>
<span class="line"><span> | + MyJsonEndpoint/</span></span>
<span class="line"><span> | | - endpoint.json</span></span>
<span class="line"><span> | | + Functions/</span></span>
<span class="line"><span> | | | - myFunction.js</span></span>
<span class="line"><span> | + MyYamlEndpoint/</span></span>
<span class="line"><span> | | - endpoint.yml</span></span></code></pre></div><h3 id="exporting-an-endpoint-config" tabindex="-1">Exporting an Endpoint Config <a class="header-anchor" href="#exporting-an-endpoint-config" aria-label="Permalink to &quot;Exporting an Endpoint Config&quot;">​</a></h3><p>In order to export an endpoint for saving to git, follow these steps:</p><ul><li>Go to the Endpoints page in AireGlu</li><li>Find the endpoint you want to export, and click on the export button (box with an arrow icon) on the endpoint overview</li><li>Choose your preferred format</li><li>Decide whether to include encrypted values <ul><li>this determines whether sensitive fields within the endpoint have their values include in the export, or whether a placeholder is used (which must be replaced for the endpoint to function after import/repository synchronisation). If you have used AireGlu secret references in sensitive fields such as password fields, then choose <code>Include encrypted values</code> and these will be included in the endpoint definition</li></ul></li><li>Paste the export into a Notepad file named <code>endpoint.yml</code> if you chose YAML format, or <code>endpoint.json</code> if you chose JSON format<div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>This must be a plain text file created by Notepad or similar. Do not use programs such as Word to create this file as they will not work and could casue damage to your setup when imported.</p></div></li><li>Save or copy this file to your repository at <code>{repository path}/Endpoints/your-endpoint-name/</code></li></ul>`,22),r=[n];function s(l,p,d,c,h,u){return o(),t("div",null,r)}const m=e(a,[["render",s]]);export{f as __pageData,m as default};
