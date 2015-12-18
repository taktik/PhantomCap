phantomjs --ignore-ssl-errors=true maps.js 920 760 "50.782828,4.3654962,11.14z" && convert -crop 920x520+0+80 map.png map1.png && open map1.png
