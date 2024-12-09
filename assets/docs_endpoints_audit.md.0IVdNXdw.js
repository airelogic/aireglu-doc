import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.ttppV29E.js";const b=JSON.parse('{"title":"Audit Task","description":"","frontmatter":{},"headers":[],"relativePath":"docs/endpoints/audit.md","filePath":"docs/endpoints/audit.md","lastUpdated":1733733846000}'),o={name:"docs/endpoints/audit.md"},n=i('<h1 id="audit-task" tabindex="-1">Audit Task <a class="header-anchor" href="#audit-task" aria-label="Permalink to &quot;Audit Task&quot;">​</a></h1><p>The audit task is used to create audit logs and send them to AireAudit.</p><p>The audit logs are based on the IHE (Integrating the Healthcare Enterprise) ATNA (Audit Trail and Node Authentication) specification. For detailed information, you can explore the following resources:</p><ul><li>IHE ATNA Profile Overview: <a href="https://wiki.ihe.net/index.php/Audit_Trail_and_Node_Authentication" target="_blank" rel="noreferrer">https://wiki.ihe.net/index.php/Audit_Trail_and_Node_Authentication</a></li><li>IHE Technical Frameworks: <a href="https://www.ihe.net/resources/technical_frameworks" target="_blank" rel="noreferrer">https://www.ihe.net/resources/technical_frameworks</a></li></ul><h2 id="audit-source" tabindex="-1">Audit Source <a class="header-anchor" href="#audit-source" aria-label="Permalink to &quot;Audit Source&quot;">​</a></h2><p><strong><code>Required</code></strong></p><p><code>Audit Source</code> is a required field that identifies where the audit log originated, or the application where the event being logged took place. This is set to <code>AireGlu</code> by default, but this can be changed to something that better represents the system that is consuming your endpoint.</p><h2 id="event-identifier-type" tabindex="-1">Event Identifier Type <a class="header-anchor" href="#event-identifier-type" aria-label="Permalink to &quot;Event Identifier Type&quot;">​</a></h2><p><strong><code>Required</code></strong></p><p>The <code>Event Identifier Type</code> specifies the category of the event being logged. The options for this are:</p><ul><li>Provisioning Event</li><li>Medication Event</li><li>Resource Assignment</li><li>Care Episode</li><li>Care Protocol</li><li>Disclosure</li><li>Patient Search Activity</li><li>Application Activity</li><li>Audit Log Used</li><li>Begin Transfer Instances</li><li>Instances Accessed</li><li>Instances Transffered</li><li>Study Deleted</li><li>Export</li><li>Import</li><li>Network Activity</li><li>Order Record</li><li>Patient Record</li><li>Procedure Record</li><li>Query</li><li>Security Alert</li><li>User Authentication</li><li>Emergency Override Started</li><li>Use of restricted function</li><li>Login</li><li>Logout</li></ul><h2 id="outcome-indicator" tabindex="-1">Outcome Indicator <a class="header-anchor" href="#outcome-indicator" aria-label="Permalink to &quot;Outcome Indicator&quot;">​</a></h2><p><strong><code>Required</code></strong></p><p>The <code>Outcome Indicator</code> field can be set to specify whether the event succeeded or failed. The available options are:</p><ul><li>Success</li><li>Minor Failure</li><li>Serious Failure</li><li>Critical Failure</li></ul><h2 id="action-type" tabindex="-1">Action Type <a class="header-anchor" href="#action-type" aria-label="Permalink to &quot;Action Type&quot;">​</a></h2><p><strong><code>Required</code></strong></p><p>The <code>Action Type</code> field specifies the kind of action being performed, to better understand whether a record was created, accessed, modified or deleted. The options here are:</p><ul><li>Create</li><li>Read</li><li>Update</li><li>Delete</li><li>Execute</li></ul><h2 id="event-type" tabindex="-1">Event Type <a class="header-anchor" href="#event-type" aria-label="Permalink to &quot;Event Type&quot;">​</a></h2><p>The <code>Event Type</code> defines the event being logged and categories the action into specific, and possibly standardized event categories. Multiple event types can be added to an audit log.</p><h3 id="components-of-an-event-type" tabindex="-1">Components of an Event Type <a class="header-anchor" href="#components-of-an-event-type" aria-label="Permalink to &quot;Components of an Event Type&quot;">​</a></h3><p>There are 3 components to an event type, the <strong>Code</strong>, the <strong>Code System</strong> and the <strong>Display Name</strong>.</p><h4 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h4><p><strong><code>Required</code></strong></p><p>The code is a mandatory identifier representing the type of event being logged. This should be a uniquely identifier for the event.</p><h4 id="code-system" tabindex="-1">Code System <a class="header-anchor" href="#code-system" aria-label="Permalink to &quot;Code System&quot;">​</a></h4><p><strong><code>Optional</code></strong></p><p>The code system is the standard or system which the even code is derived. It helps identify which coding scheme the code belongs to, such as HL7, DCM or a custom organizational standard.</p><p><strong><code>Optional</code></strong></p><p>The display name provides a human-readable description of the event type and is used to clarify the meaning of the code in audit reports.</p><h2 id="actors" tabindex="-1">Actors <a class="header-anchor" href="#actors" aria-label="Permalink to &quot;Actors&quot;">​</a></h2><p>The <code>Actors</code> fields represent who has made the action that is being auditted. Multiple actors can be added to an audit log.</p><h3 id="components-of-an-actor" tabindex="-1">Components of an Actor <a class="header-anchor" href="#components-of-an-actor" aria-label="Permalink to &quot;Components of an Actor&quot;">​</a></h3><p>There are 3 components to an actor, the <strong>User Id</strong> the <strong>Alternate User Id</strong> and the <strong>User Name</strong>.</p><p>At least one of these fields must be filled in.</p><h4 id="user-id" tabindex="-1">User Id <a class="header-anchor" href="#user-id" aria-label="Permalink to &quot;User Id&quot;">​</a></h4><p>The user id is a field that represents a unique system-assigned identifier such as a username, employee number or system account id. It is the primary way to track actions back to a specific user or entity.</p><h4 id="alternate-user-id" tabindex="-1">Alternate User Id <a class="header-anchor" href="#alternate-user-id" aria-label="Permalink to &quot;Alternate User Id&quot;">​</a></h4><p>The alternate user id is an optional identifier that can provide additional or alternative information about the actor. This might be an an external id for a different system, a legacy ID or an email. It is useful for environments where users have multiple representations across different systems.</p><h4 id="user-name" tabindex="-1">User Name <a class="header-anchor" href="#user-name" aria-label="Permalink to &quot;User Name&quot;">​</a></h4><p>The user name is an optional human-readable name for the actor. This field typically stores a full name or display name corresponding to the user id.</p><h2 id="auditable-objects" tabindex="-1">Auditable Objects <a class="header-anchor" href="#auditable-objects" aria-label="Permalink to &quot;Auditable Objects&quot;">​</a></h2><p>The <code>Auditable Objects</code> fields represent the specific data, resources or entities involved in the event being logged. Many auditable objects can be added to an audit log.</p><h3 id="components-of-an-auditable-object" tabindex="-1">Components of an Auditable Object <a class="header-anchor" href="#components-of-an-auditable-object" aria-label="Permalink to &quot;Components of an Auditable Object&quot;">​</a></h3><p>Each auditable object can have an <strong>Object Identifier</strong>, an <strong>Object Type</strong> and an optional list of <strong>Details</strong></p><h4 id="object-identifier" tabindex="-1">Object Identifier <a class="header-anchor" href="#object-identifier" aria-label="Permalink to &quot;Object Identifier&quot;">​</a></h4><p><strong><code>Required</code></strong></p><p>The <code>Object Identifier</code> is a value that identifies the object being audited. This could be a file name, database id or any other reference.</p><h4 id="object-type" tabindex="-1">Object Type <a class="header-anchor" href="#object-type" aria-label="Permalink to &quot;Object Type&quot;">​</a></h4><p><strong><code>Required</code></strong></p><p>The <code>Object Type</code> is a field that describes the type of object. This can be any of the following:</p><ul><li>System Object</li><li>Organization</li><li>Person</li><li>Other</li></ul><h3 id="object-details" tabindex="-1">Object Details <a class="header-anchor" href="#object-details" aria-label="Permalink to &quot;Object Details&quot;">​</a></h3><p><strong><code>Optional</code></strong></p><p>The <code>Details</code> fields are a list of key value pairs that provide additional information about the object. This can be used to add context such as metadata, status information or additional attributes related to the object.</p>',56),r=[n];function d(s,l,c,h,p,u){return a(),t("div",null,r)}const m=e(o,[["render",d]]);export{b as __pageData,m as default};