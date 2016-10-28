try {
    function convert(tempType) {
        var x;
        if (tempType == "C") {
            x = document.getElementById("C").value * 9 / 5 + 32;
            document.getElementById("F").value = Math.round(x);
            isNaN(displayMessage("Invalid input, try again."))
        } else {
            x = (document.getElementById("F").value - 32) * 5 / 9;
            document.getElementById("C").value = Math.round(x);
            isNaN(displayMessage("Invalid input, try again."))
          }
       }
    }
catch (err)
    {
    document.getElementById("C").innerHTML = err.message;
    }