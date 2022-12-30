function FizzBuzzSimple(first, second, countTill)
{
  if(isNaN(first) || first === undefined || first < 1) first = 3;
  if(isNaN(second) || second === undefined || second < 1) second = 4;
  if(isNaN(countTill) || countTill === undefined || countTill <= 1 ) countTill = 100;

  var list = document.getElementById("list");
  var li;

  //Removes existing child nodes
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for(var i = 1; i < countTill; i++)
  {
    if(i % second === 0 && i % first === 0)
    {
      li = document.createElement("li");
      li.className = "list-group-item alert alert-danger";
      li.innerHTML = i + '<span class="badge">FizzBuzz</span>';
    }
    else if (i % second === 0)
    {
      li = document.createElement("li");
      li.className = "list-group-item alert alert-warning";
      li.innerHTML = i + '<span class="badge">Buzz</span>';
    }
    else if (i % first === 0)
    {
      li = document.createElement("li");
      li.className = "list-group-item alert alert-success";
      li.innerHTML = i + '<span class="badge">Fizz</span>';
    }
    else
    {
      li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = i;
    }

    list.appendChild(li);
  }
}

function FizzBuzzAdvanced()
{
  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  var countTill = document.getElementById("countTill").value;
  countTill++;
  var temp ;

  if(first > second)
  {
    temp = second;
    second = first;
    first = temp;
  }

  FizzBuzzSimple(first, second, countTill);
}
