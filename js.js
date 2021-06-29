
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-511422874/DAEZCOy-lssCEJrj7vMB',
      'event_callback': callback
  });
  return false;
}



alert("hola");
