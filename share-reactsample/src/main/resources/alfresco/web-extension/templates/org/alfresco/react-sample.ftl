<#include "include/alfresco-template.ftl" />

<@templateHeader>
    <@link rel="stylesheet" type="text/css" href="${url.context}/res/share-reactsample/react-sample/style.css" />
    <@script type="text/javascript" src="${url.context}/res/js/lib/react-components/Runner.js"></@script>
</@>


<@templateBody>

    <@markup id="alf-hd">
        <div id="alf-hd">
            <@region scope="global" id="share-header" chromeless="true"/>
        </div>
    </@>
    <@markup id="bd">
        <div id="bd">

            <div id="reactRender">
            </div>

        </div>
    </@>
</@>

<@templateFooter>
    <@markup id="alf-ft">
        <div id="alf-ft">
            <@region id="footer" scope="global" />
        </div>
    </@>
</@>