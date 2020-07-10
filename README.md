
## Description
The project is a sample of how to integration React, Redux libraries into Alfresco Share. 
Keep in mind, this module developed only for Alfresco Share. 

### Compatibility
 1. ***Alfresco Share v5.2.f***
 2. ***Alfresco Share v6.2.0***
 
 
### Requirements
 1. **Maven 3**
 2. **NPM**
 3. **babel**
 4. **Java 8**

### How to build amp
Before build .amp file you need to compile .js files. 
 - Go to the folder **${path_to_share_module}/src/main/resources/web/js/lib/react-components**
     - Run the following command in terminal:
       `npx babel ./ -d ./ --presets react-app/prod`
 - Go to the main folder of the project
     - Run the following command in terminal:
       `mvn clean package`
       
### How to deploy amp to Alfresco Share
Take the .amp file from target folder **${path_to_share_module}/target/share-reactsample-1.0-SNAPSHOT.amp**
and put it in your Alfresco server in the folder **${path_to_your_alfresco}/amps_share** 
 - For apply .amp follow to the next folder **${path_to_your_alfresco}/bin** 
   - Run the script file:
     `./apply_amps.sh`
