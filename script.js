
//=include '../vendor/svg4everybody/svg4everybody.js'
//=include '../vendor/mousewheel/jquery.mousewheel.js'
//=include '../vendor/custom-select/classie.js'
//=include '../vendor/custom-select/selectFx.js'
//=include '../vendor/slick/js/slick.js'
//=include '../vendor/waypoints/jquery.waypoints.js'
//=include '../vendor/counterup/jquery.counterup.js'
//=include '../vendor/countdown/jquery.countdown.js'
//=include '../vendor/dlmenu/modernizr.custom.js'
//=include '../vendor/dlmenu/jquery.dlmenu.js'
//=include '../vendor/magnific-popup/js/jquery.magnific-popup.js'
//=include '../vendor/imagesloaded/imagesloaded.pkgd.min.js'
//=include '../vendor/isotope/isotope.pkgd.js'
//=include '../vendor/isotope/fitcolumns.js'
//=include '../vendor/nanoscroller/js/jquery.nanoscroller.js'
//=include '../vendor/progressbar/progressbar.min.js'
//=include '../vendor/jpinning/jpinning.js'
//=include '../vendor/easyembed/jquery.easyembed.js'


<!DOCTYPE html>
<html>
<body>

<form>
<input type="button" id="btn01" value="OK">
</form>

<p>Click the "Disable" button to disable the "OK" button:</p>

<button onclick="disableElement()">Disable</button>

<script>
function disableElement() {
  document.getElementById("btn01").disabled = true;
}
</script>

</body>
</html>
