function changeText() {
    document.getElementById("message").innerText = "🎉 You successfully deployed using AWS Pipeline!";
}

function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
