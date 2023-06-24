      // クリック数カウント
      const clickButton = document.getElementById('clickButton');
      const resetButton = document.getElementById('resetButton');
      const clickCountElement = document.getElementById('clickCount');

      let clickCount = 0;

      clickButton.addEventListener('click', function() {
        clickCount++;
        clickCountElement.textContent = `クリックした数: ${clickCount}`;
      });

      resetButton.addEventListener('click', function() {
        clickCount = 0;
        clickCountElement.textContent = `クリックした数: ${clickCount}`;
      });

      // 時計表示
      function displayClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = padZero(hours);
        minutes = padZero(minutes);
        seconds = padZero(seconds);

        var time = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").textContent = time;

        setTimeout(displayClock, 1000);
      }

      displayClock();

      function padZero(value) {
        if (value < 10) {
          return "0" + value;
        } else {
          return value;
        }
      }

      // おみくじ
      function drawFortune() {
        var fortunes = [
          "大吉",
          "中吉",
          "小吉",
          "吉",
          "末吉",
          "凶",
          "大凶"
        ];

        var randomIndex = Math.floor(Math.random() * fortunes.length);
        var fortune = fortunes[randomIndex];

        var resultElement = document.getElementById("fortune-result");
        resultElement.textContent = "今日の運勢は「" + fortune + "」です！";
      }

      const fortuneButton = document.getElementById('fortuneButton');
      fortuneButton.addEventListener('click', drawFortune);

      // 背景色変更
      const changeColorButton = document.getElementById('changeColorButton');
      changeColorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
      });

      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }