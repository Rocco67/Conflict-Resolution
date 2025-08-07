function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5u0fkZftGaK":
        Script1();
        break;
      case "5hqCRnjSHKx":
        Script2();
        break;
      case "6RhKoCfaMDW":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var userText = player.GetVar("userReflection"); // Get the text from the variable

// Create a Blob containing the text
var blob = new Blob([userText], { type: "text/plain;charset=utf-8" });

// Create a temporary link to download the Blob
var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "reflection.txt"; // Set the filename

// Programmatically click the link to initiate download
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

function Script2()
{
  var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; // JavaScript months are 0-indexed
var year = today.getFullYear();

var dateString = day + "." + month + "." + year;

var player = GetPlayer();
player.SetVar("CurrentDate", dateString);
}

function Script3()
{
  function printCert() {
  window.print();
}

printCert();
}

