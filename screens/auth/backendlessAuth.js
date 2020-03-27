import Backendless from 'backendless';
import 'backendless-react-native';

const APP_ID = Expo.Constants.manifest.extra.backendless.APP_ID;

const API_KEY = Expo.Constants.manifest.extra.backendless.API_KEY;

Backendless.initApp(APP_ID, API_KEY)
    .catch(error => { console.log(error)});

export default backendlessAuth = ()=> {
    Backendless.Data.of( "TestTable" ).save( { foo:"bar" } )
        .then( function( obj ) {
            console.log( "object saved. objectId " + obj.objectId )
        } )
        .catch( function( error ) {
            console.log( "got error - " + error )
        })
}
