let data = document.getElementById("data");
      let generate = document.getElementById("generate");
      let form = document.getElementById("form");
      let result = document.getElementById("result");
      let encoded = document.getElementById("encoded");
      let discardBtn = document.querySelector(".discard");
      let downloadBtn = document.querySelector(".download");
      let canvas = document.getElementById("canvas");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        computeQR();
        result.classList.toggle("toggleVisibility");
        form.classList.toggle("toggleVisibility");
        encoded.innerText = `${data.value}`;
      });

      data.addEventListener("input", (e) => {
        encoded.innerText += e.target.value;
        console.log(e.target.value);
        console.error(data.value);
      });

      discardBtn.addEventListener("click", () => {
        result.classList.toggle("toggleVisibility");
        form.classList.toggle("toggleVisibility");
      });

      downloadBtn.addEventListener("click", () => {
        var link = document.createElement("a");
        link.download = "image.png";
        canvas.toBlob(function (blob) {
          link.href = URL.createObjectURL(blob);
          console.log(blob);
          console.log(link.href);
          link.click(); // this line should be here
        }, "image/png");
      });

      let computeQR = () => {
        QRCode.toCanvas(canvas, data.value, function (error) {
          if (error) console.error(error);
          console.log("success!");
        });
      };