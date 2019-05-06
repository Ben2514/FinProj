// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
  } 
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    FB.api('/me', function(response) {
      $.post('/getstatus', response, (data)=> {
        if (typeof(data[0])!="undefined") {
          if (data[0].login_status==="IN") { 
            document.getElementById("fb-login").style.display="none";
            document.getElementById("login").style.display="none";
            document.getElementById("continue_visitor").style.display="none";
            FB.getLoginStatus(function(response) {
              statusChangeCallback(response);
            });
          }
          else if (data[0].login_status==="OUT") {
            document.getElementById("fb-login").style.display="none";
            document.getElementById("logout").style.display="none";
            document.getElementById("continue_login").style.display="block";
            document.getElementById("continue_visitor").style.display="block";
            document.getElementById("login").style.display="none";
            document.getElementById('status').innerHTML = response.name + "? Please log in.";
          }
        }
        else {
          if (typeof(response.error)==="undefined") {
            document.getElementById("fb-login").style.display="none";
            document.getElementById("logout").style.display="none";
            document.getElementById("create_membership").style.display="block";
            document.getElementById("login").style.display="none";
            //document.getElementById("continue_visitor").style.display="block";
            document.getElementById('status').innerHTML = response.name + "? Be our member to continue.";
          }
          else if (response.error.code===2500) {
            document.getElementById("fb-login-button").style.display="block";
            document.getElementById("logout").style.display="none";
            document.getElementById("continue_visitor").style.display="block";
            document.getElementById('status').innerHTML = "Please log in Facebook or continue as a visitor.";
          } 
        }
      });
    });
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : "587487145096824",
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : "v3.2" // The Graph API version to use for the call
  });
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  checkLoginState();		
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var now={};
// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  document.getElementById("create_membership").style.display="none";
  document.getElementById("continue_login").style.display="none";
  document.getElementById("continue_visitor").style.display="none";
  document.getElementById("logout").style.display="block";
  FB.api('/me', function(response) {
    console.log(response);
    document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
		now.id=response.id;
    now.name=response.name;
    console.log(now);
		event.preventDefault()
	  $.post('/login', response);
  });
  $.ajax({
    type: "GET",
  	url: "./order.html", 
  	datatype: "html",
    success: function(data) {
		  document.getElementById('order').innerHTML = data;
		}
	});
}

function logout() {
	$.post('/logout', {"id":now.id});
	now={};
  document.getElementById('order').innerHTML = "";
	checkLoginState();
}

function visitor() {
  $.post('/login', {"id":"-1", "name":"visitor"}, (data)=> {
    now["id"]=data.id;
    now["name"]="visitor"
    console.log(now);
    document.getElementById('status').innerHTML = 'You are NO.' + now.id + ' visitor';
  })
  document.getElementById("login").style.display="block";
  document.getElementById("create_membership").style.display="block";
  document.getElementById("logout").style.display="none";
  document.getElementById("continue_visitor").style.display="none";
  document.getElementById("continue_login").style.display="none";
  //document.getElementById('status').innerHTML = 'You are NO.' + now.id + ' visitor';
	$.ajax({
    type: "GET",
  	url: "order.html",
  	datatype: "html",
  	success: function(data) {
			document.getElementById('order').innerHTML = data;
		}
  });
}

function create() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {    
      testAPI();
      console.log("test");
      console.log("test1");
      console.log("test1");
      checkLoginState();
    }
    else {
      document.getElementById('status').innerHTML = "Login Facebook to be our member";
      document.getElementById("create_membership").style.display="none";
      document.getElementById("continue_login").style.display="none";
      document.getElementById("continue_visitor").style.display="none";
      document.getElementById("fb-login").style.display="block";
      document.getElementById("login").style.display="none";
    }
  })
}

function li() {
  document.getElementById("create_membership").style.display="none";
  document.getElementById("login").style.display="none";
  document.getElementById("continue_visitor").style.display="none";
  document.getElementById("fb-login").style.display="block";
}
