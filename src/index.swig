<!DOCTYPE html>
<html>
<head>

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">

  <meta name="fragment" content="!">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link type="image/ico" rel="shortcut icon" href="resources/images/favicon.ico">
  <link type="image/ico" rel="icon"  href="resources/images/favicon.ico">

  <!-- htmlmin:ignore -->
  <!--
    To correctly reference your Story Maps Crowdsource App in search engine:
     - create and fill out extensively an ArcGIS Online item that link to your final application
     - edit the following six tags. For more information, see the following blog post:
      (https://developerscorner.storymaps.arcgis.com/grow-your-story-maps-audience-with-open-graph-tags-b7639cb65d5c)
  -->

  <!-- <script src="https://use.fontawesome.com/431a8f4589.js"></script> -->
  <link type="text/css" rel="stylesheet" href="resources/fonts/wll-living-archive/styles.css" />

  <title></title>
  <meta name="description" content="">

  <!-- Social Sharing -->
  <meta property="og:type" content="article"/>
  <meta property="og:title" content=""/>
  <meta property="og:description" content=""/>
  <meta property="og:image" content=""/>
  <!-- END Social Sharing -->

  <script type="text/javascript">
		//-------------------------------------------------------------------------------------------
		//     Application configuration (ignored on ArcGIS Online and Portal)
		//-------------------------------------------------------------------------------------------
		var configOptions = {
			// Enter an application ID created through the Crowdsource builder
			appid: "98c3f61e426e43188812c9e844812671",
			// Optionally to be able to use the appid URL parameter, configure here the list of application author
			//  whose application are allowed to be viewed by this Crowdsource deployment
			// This is the Portal username of the Crowdsource owner (e.g. ["user1"] or ["user1", "user2"])
			authorizedOwners: ["*"],
      // Optionally to secure Crowdsource's access, use an OAuth application ID (example: 6gyOg377fLUhUk6f)
      oAuthAppId: ""
		};
		// Optionally sharing, proxy URLs, Bing Maps key, Geometry and Geocode service's URLs can be configured in app/config.js. This is only required
		//   when the webmap is not hosted on ArcGIS Online or a Portal for ArcGIS instance and the application isn't deployed as /home/StoryMapCrowdsource/ or /apps/StoryMapCrowdsource/.
	</script>

  <!-- htmlmin:ignore -->
  <!--[if IE 9]>
  <script type="text/javascript">
    alert('This app requires a modern browsers to run properly. Please update your browser then visit this page again.');
    window.location = "http://browsehappy.com/";
  </script>
  <![endif]-->
  <!--[if lt IE 9]>
  <script type="text/javascript">
    alert('This app requires a modern browsers to run properly. Please update your browser then visit this page again.');
    window.location = "http://browsehappy.com/";
  </script>
  <![endif]-->

</head>
<body class="calcite">
  <!-- htmlmin:ignore -->
  <style>
    /* CUSTOM CSS RULES */
  </style>
  <!-- htmlmin:ignore -->

  <div id="app"></div>

  <div id="loadingOverlay">
    <div id="loadingIndicator" class="loadingIndicator">
      <img src="resources/images/loader-light.gif" />
    </div>
  </div>

  <!-- Loading -->
	<style>
    html,body {
      margin: 0;
      padding: 0;
    }

		#loadingOverlay {
      position: absolute;
      top: 0;
			width: 100%;
			height: 100%;
			background-color: #E5E5E5;
			-webkit-box-shadow: inset 0px 0px 82px 19px rgba(0,0,0,0.3);
			-moz-box-shadow: inset 0px 0px 82px 19px rgba(0,0,0,0.3);
			box-shadow: inset 0px 0px 82px 19px rgba(0,0,0,0.3);
		}

		#loadingIndicator {
      position: fixed;
      margin: -50px 0 0 -50px;
      top: 50%;
      left: 50%;
      text-align: center;
      z-index: 900;
		}

    #loadingIndicator img {
      position: relative;
      height: 60px;
      width: 60px;
      margin: 20px;
		}

    .snapshot-generator {
      display: block;
      height: 1px;
      left: 0;
      object-fit: contain;
      position: fixed;
      top: 0;
      width: 1px;
      z-index: -1;
    }

    /* change header bg color to white and text color to darker */
    .sidePanel-default .main-app-header.header {
      background-color: #ffffff;
      color: #3e3d3e;
    }

    .food-overlay {
      position: absolute;
      right: 60px;
      bottom: 50px;
      z-index: 1;
      cursor: pointer;
      text-align: center;
    }
    .food-overlay-txt {
      background-color: rgba(229, 229, 229, 0.7);
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 5px;
      font-weight: bold;
    }

    .food-overlay img {
      height: 200px;
      border-radius: 10px;
      cursor: pointer;
    }

    .food-overlay-mobile img {
      position: absolute;
      right: 20px;
      bottom: 150px;
      z-index: 1;
      height: 120px;
      border-radius: 10px;
    }

    .food-overlay:hover {
      cursor: pointer;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.67);
      -moz-box-shadow:    0px 0px 30px 0px rgba(255, 255, 255, 0.67);
      box-shadow:         0px 0px 30px 0px rgba(255, 255, 255, 0.67);
    }
	</style>

  <script type="text/javascript">
    var app = {
      version: '{{ versionStr }}',
      pathJSAPI: '//js.arcgis.com/3.19/'
    };

    // detect mobile/tablet
    window.mobileAndTabletcheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
  </script>
  <script type="text/javascript" src="{{ pathMods.resourcePath }}app/main-config{{ pathMods.minPath }}.js"></script>
  {% if environment === 'dev' %}<script src="//localhost:8888/livereload.js"></script>{% endif %}

</body>
</html>
