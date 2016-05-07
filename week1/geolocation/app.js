/// <reference path="typings/browser/ambient/modernizr/index.d.ts" />
function getUserLocation(){
    if(Modernizr.geolocation){
       navigator.geolocation.getCurrentPosition(success,error);
    }else{
        console.log("you do not have geolocation");
    }
}

function success(locn){
   lat=locn.coords.latitude;//globally available
  lon=locn.coords.longitude;//globally available
       $(document).trigger('function_success'); 
}

function error(error){
    switch (error){
        case error.PERMISSION_DENIED:
        console.log("PERMISSION_DENIED");
        break;
        case error.POSITION_UNAVAILABLE:
        console.log("POSITION_UNAVAILABLE");
        break;
        case error.TIMEOUT:
        console.log("TIMEOUT");
        break;
        default:
        break;
      
    }
   
}
 getUserLocation();
function onsuccess(){
     console.log("lat is "+lat);
     console.log("lon is "+lon);
    initMap();
    
 }
 $(document).bind('function_success', onsuccess);
