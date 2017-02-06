'''Generate HTML for 144 tile divs.'''

for x in range(12):
    print("          <div class='class-column-of-tiles'>")
    for y in range(12):
        print("            <div class='tile" +
              str((x + y)%2 + 1) +
              "' onclick='game.accept_click(" + str(x) + ", " + str(y) +
              ")'><svg id='div-tile-x" + str(x) + "-y" + str(y) +
              "' viewBox='0 0 7000 7000'></svg></div>")
    print("          </div>")
