const { withAppBuildGradle } = require('@expo/config-plugins'); 

/*
str.slice(0, str.indexOf('dependencies') + 'ependencies {'.length + 1 ) + '  hola ' + str.slice(str.indexOf('dependencies') + 'ependencies {'.length + 1 )

*/


module.exports = function withAndroidStrategiesPlugin(config) {
    return withAppBuildGradle(config, (config) => {

        if(config.modResults.contents){

            //var GTMdependencies = 'dependencies {\n\timplementation("com.google.android.gms:play-services-tagmanager:18.0.4")\n'; 
            //config.modResults.contents =config.modResults.contents.replace('dependencies {', GTMdependencies);
        }
       
        return config;
       
      });
    
};
