<!-- Event snippet for Solicitar cotización conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
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


</script>


alert("hola");
