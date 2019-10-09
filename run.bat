START chrome --user-data-dir=C:\TEMP\acc1 --start-fullscreen --new-window http://localhost:5000 --kiosk --disable-pinch --new-window "%1"
START chrome --user-data-dir=C:\TEMP\acc2 --start-fullscreen --new-window http://localhost:5000 --kiosk --disable-pinch --new-window "%2" --window-position=1680,0 
serve -s build
EXIT