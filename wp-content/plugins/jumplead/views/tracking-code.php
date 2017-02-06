<?php
/**
 * NOTES
 * - Seperate </body> like </"+"body> due to some plugins injecting code before </body>
 */
?>
<script type="text/javascript">
window.Jumplead||function(b,c){function g(){return"<body onload=\"var d=document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src='//cdn.jumplead.com/tracking_code.js'\"></"+"body>"}var d=b.document,h=d.getElementsByTagName("head")[0],a=d.createElement("iframe"),e;b.jump=b.jump||function(){(b.jump.q=b.jump.q||[]).push(arguments)};c.events=b.jump;a.style.display="none";h.appendChild(a);try{a.contentWindow.document.open()}catch(k){c.domain=
d.domain,e="javascript:var d=document.open();d.domain='"+d.domain+"';",a.src=e+"void(0);"}try{var f=a.contentWindow.document;f.write(g());f.close();f.params=c}catch(k){a.src=e+'d.write("'+g().replace(/"/g,'\\"')+'");d.close();',a.src.contentDocument.params=c}}(window,{account:"<?php echo esc_attr( $tracker_id ); ?>",version:4});
</script>
