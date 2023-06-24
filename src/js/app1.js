<div id="disp"><img src="S__171769858.jpg"></div>
        写真：
        <input type="button" value="表示" onclick="hyoji(0)">
        <input type="button" value="非表示" onclick="hyoji(1)">
        <script>

            function hyoji(num)
            {
              if (num == 0)
              {
                document.getElementById("disp").style.display="block";
              }
              else
              {
                document.getElementById("disp").style.display="none";
              }
            }
            
            </script>