Test on ***Alfresco Share v6.2.0*** and ***Alfresco Share v5.2.f***

Before running or deploy the project build the .js files with next command from folder 
**${path_to_share_module}/src/main/resources/web/js/lib/react-components**:
 - `npx babel ./ -d ./ --presets react-app/prod`

If you did some changes in .jsx files please don't forget to compile .js files for successfully applying changes, use the command above.

In order for deploy share amp file:
add a project as maven project and run following command:
 - `mvn clean package`

After build project take the .amp file from target folder **${path_to_share_module}/target/share-reactsample-1.0-SNAPSHOT.amp**
and put it in your Alfresco server in the folder **${path_to_your_alfresco}/amps_share** 

For apply .amp please follow to the next folder **${path_to_your_alfresco}/bin** and run script:
 - `./apply_amps.sh`