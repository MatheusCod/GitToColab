// Buttons
var toButton = document.getElementById('to_colab');
var copyURL = document.getElementById('copy_url');
var copyBadge = document.getElementById('copy_badge');
var copyHTML = document.getElementById('copy_html');

// Text Input Fields
var gitURL = document.getElementById('git_field');
var colabURL = document.getElementById('url_field');
var colabBadge = document.getElementById('badge_field');
var colabHTML = document.getElementById('html_field');

//Base strings
var baseURL = "https://colab.research.google.com/github";
var baseBadge = "[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)]";
var baseHTML = "\t<img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/>" + '\n' + "</a>"

// Functions
toButton.onclick = function() {
  colabURL.value = baseURL + gitURL.value.slice(18);
  colabBadge.value = baseBadge + colabURL.value;
  colabHTML.value = "<a href=\"" + colabURL.value + "\">\n" + baseHTML;
};

copyURL.onclick = function() {
  colabURL.select();
  colabURL.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

copyBadge.onclick = function() {
  colabBadge.select();
  colabBadge.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

copyHTML.onclick = function() {
  colabHTML.select();
  colabHTML.setSelectionRange(0, 99999);
  document.execCommand("copy");
};
